import { createTestRtkQueryStore } from "@/shared/lib/tests/createTestRtkQueryStore/createTestTrkQueryStore";

import { articleTestData1 } from "@/entities/Article/testing";

import { recommendationsApi } from './aritcleRecommendationsApi';

import 'whatwg-fetch'

describe('getArticleRecommendationsList', () => {
    test('success', async () => {
        const articlesData = [articleTestData1]

        global.fetch = jest.fn().mockResolvedValue(
          new Response(JSON.stringify(articlesData), {
              status: 200,
              headers: {
                  'Content-Type': 'application/json',
              },
          }),
        );
        const store = createTestRtkQueryStore();
        const result = await store.dispatch(
          recommendationsApi.endpoints.getArticleRecommendationsList.initiate(3),
        );

        expect(result.status).toBe('fulfilled');
        expect(result.data).toEqual(articlesData);
    });

    test('error', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 403,
            json: async () => ({}),
        }) as jest.Mock;

        const store = createTestRtkQueryStore();
        const result = await store.dispatch(
          recommendationsApi.endpoints.getArticleRecommendationsList.initiate(3),
        );

        expect(result.status).toBe('rejected');
        expect(result.error).toBeDefined();
    });
});

import { createTestRtkQueryStore } from "@/shared/lib/tests/createTestRtkQueryStore/createTestTrkQueryStore";

import { commentTestData } from "@/entities/Comment/testing";

import { commentsApi } from './aritcleCommentsApi';

import 'whatwg-fetch'

describe('getArticleCommentsList', () => {
    test('success', async () => {
        const commentsData = [commentTestData]

        global.fetch = jest.fn().mockResolvedValue(
          new Response(JSON.stringify(commentsData), {
              status: 200,
              headers: {
                  'Content-Type': 'application/json',
              },
          }),
        );
        const store = createTestRtkQueryStore();
        const result = await store.dispatch(
          commentsApi.endpoints.getArticleCommentsList.initiate('1'),
        );

        expect(result.status).toBe('fulfilled');
        expect(result.data).toEqual(commentsData);
    });

    test('error', async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 403,
            json: async () => ({}),
        }) as jest.Mock;

        const store = createTestRtkQueryStore();
        const result = await store.dispatch(
          commentsApi.endpoints.getArticleCommentsList.initiate('1'),
        );

        expect(result.status).toBe('rejected');
        expect(result.error).toBeDefined();
    });
});

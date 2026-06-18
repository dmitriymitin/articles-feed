import { StateSchema } from '@/app/providers/StoreProvider'

import {
    getArticleRecommendationsIsLoading
} from './recommendations';

describe('recommendations.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                recommendations: { isLoading: true },
            }
        };
        expect(getArticleRecommendationsIsLoading(state as StateSchema)).toEqual(true);
    });
});

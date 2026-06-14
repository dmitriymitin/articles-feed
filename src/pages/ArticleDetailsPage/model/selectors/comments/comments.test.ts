import { StateSchema } from '@/app/providers/StoreProvider'

import {
    getArticleCommentsIsLoading
} from './comments';

describe('comments.test', () => {
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: { isLoading: true },
            }
        };
        expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
    });
});

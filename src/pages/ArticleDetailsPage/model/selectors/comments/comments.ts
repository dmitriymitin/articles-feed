import { StateSchema } from '@/app/providers/StoreProvider';

/** @deprecated */
export const getArticleCommentsIsLoading = (state: StateSchema) => {
    return state.articleDetailsPage?.comments?.isLoading;
};

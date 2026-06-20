import { Article } from '@/entities/Article';
import { Comment } from '@/entities/Comment';

import { rtkApi } from '@/shared/api/rtkApi'

const commentsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleCommentsList: build.query<Comment[], Article['id']>({
            query: (articleId) => ({
                url: '/comments',
                params: {
                    articleId,
                    _expand: 'user',
                },
            }),
        }),
    }),
});

export const { getArticleCommentsList } = commentsApi.endpoints

export const refetchArticleCommentsListQuery = (articleId: Article['id']) => {
    return getArticleCommentsList.initiate(articleId, { forceRefetch: true });
}

export const useArticleCommentsListQuery =
  commentsApi.useGetArticleCommentsListQuery;

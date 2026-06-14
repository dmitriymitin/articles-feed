import { fetchCommentsByArticleId } from "../../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { ArticleDetailsCommentsSchema } from "../../types/ArticleDetailsCommentsSchema";

import { articleDetailsCommentsReducer, commentsAdapter } from './articleDetailsCommentsSlice';

import { commentTestData } from "@/entities/Comment/testing";

describe('articleDetailsCommentsSlice.test', () => {
  test('test get article details comments pending', () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: 'error',
    };

    expect(
      articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, fetchCommentsByArticleId.pending),
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('test get article details comments fulfilled', () => {
    const state = commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
        {
          isLoading: true,
          error: undefined,
          ids: ['2'],
          entities: {  },
        },
      )


    const commentsData = [
      commentTestData,
      commentTestData
    ]

    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled(commentsData, '', ''),
      ),
    ).toEqual({
      ...commentsAdapter.setAll(state, commentsData),
      isLoading: false,
      error: undefined,
    });
  });
});

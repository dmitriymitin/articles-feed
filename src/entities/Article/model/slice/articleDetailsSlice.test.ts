import { articleDetailsTestData } from "../../testing";

import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

import { articleDetailsReducer } from './articleDetailsSlice';

describe('articleDetailsSlice.test', () => {
  test('test get article details service pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: 'error',
    };

    expect(
      articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending),
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('test get article details service fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.fulfilled(articleDetailsTestData, '', ''),
      ),
    ).toEqual({
      isLoading: false,
      error: undefined,
      data: articleDetailsTestData
    });
  });
});

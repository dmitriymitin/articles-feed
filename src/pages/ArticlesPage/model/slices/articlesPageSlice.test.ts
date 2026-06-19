import {
  articlesDataTestEntities,
  articlesDataTestIds,
  articleTestData1,
  articleTestData2,
} from "@/entities/Article/testing";

import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

import { articlesAdapter, articlesPageActions,articlesPageReducer } from './articlesPageSlice';

describe('articlesPageSlice.test', () => {
  const getState = () => {
    return articlesAdapter.getInitialState<ArticlesPageSchema>(
      {
        isLoading: false,
        error: 'error',
        ids: articlesDataTestIds,
        entities: articlesDataTestEntities,
        page: 1,
        limit: 9,
        hasMore: false,
      },
    )
  }

  test("test set page article page", () => {
    const state = getState();

    expect(
      articlesPageReducer(
        state,
        articlesPageActions.setPage(10)
      )
    ).toEqual({
      ...state,
      page: 10
    });
  });

  test('test article page pending with replace false', () => {
    const state = {
      ...getState(),
      isLoading: false,
      error: undefined
    }

    expect(
      articlesPageReducer(state, {
          type: fetchArticlesList.pending.type,
          meta: { arg: { } },
        }
      ),
    ).toEqual({
      ...state,
      isLoading: true,
      error: undefined,
    });
  });

  test('test article page pending with replace true', () => {
    const state = {
      ...getState(),
      isLoading: false,
      error: undefined
    }

    expect(
      articlesPageReducer(state, {
          type: fetchArticlesList.pending.type,
          meta: { arg: { replace: true } },
        }
      ),
    ).toEqual({
      ...articlesAdapter.removeAll(state),
      isLoading: true,
      error: undefined,
    });
  });

  test('test article page pending rejected', () => {
    const state = {
      ...getState(),
      isLoading: true,
      error: undefined
    };

    expect(
      articlesPageReducer(state, {
        type: fetchArticlesList.rejected.type,
        payload: 'error',
      }),
    ).toEqual({
      ...state,
      isLoading: false,
      error: 'error',
    });
  });

  test('test get articles article page fulfilled with false replace', () => {
    const state = getState()

    const articleDates = [
      articleTestData1,
      articleTestData2
    ]

    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.fulfilled(articleDates, '', { replace: false }),
      ),
    ).toEqual({
      ...articlesAdapter.addMany(state, articleDates),
      isLoading: false,
      error: undefined,
    });
  });

  test('test get articles article page fulfilled with true replace', () => {
    const state = getState()

    const articleDates = [
      articleTestData1,
      articleTestData2
    ]

    expect(
      articlesPageReducer(
        state as ArticlesPageSchema,
        fetchArticlesList.fulfilled(articleDates, '', { replace: true }),
      ),
    ).toEqual({
      ...articlesAdapter.setAll(state, articleDates),
      isLoading: false,
      error: undefined,
    });
  });
});

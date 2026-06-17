import { StateSchema } from '@/app/providers/StoreProvider'

import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageLimit,
  getArticlesPageNum,
} from './articlesPage';

describe('articleDetails.test', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        error: 'error',
      },
    };
    expect(getArticlesPageError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
  });

  test('should return has more', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        hasMore: true,
      },
    };
    expect(getArticlesPageHasMore(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state has more', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageHasMore(state as StateSchema)).toEqual(undefined);
  });

  test('should return inited', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        _inited: true,
      },
    };
    expect(getArticlesPageInited(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state inited', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageInited(state as StateSchema)).toEqual(undefined);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        isLoading: true,
      },
    };
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should return page limit', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        limit: 1,
      },
    };
    expect(getArticlesPageLimit(state as StateSchema)).toEqual(1);
  });
  test('should work with empty state page limit', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageLimit(state as StateSchema)).toEqual(9);
  });

  test('should return page num', () => {
    const state: DeepPartial<StateSchema> = {
      articlesPage: {
        page: 2,
      },
    };
    expect(getArticlesPageNum(state as StateSchema)).toEqual(2);
  });
  test('should work with empty state page num', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticlesPageNum(state as StateSchema)).toEqual(1);
  });
});

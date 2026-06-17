import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import {
    getArticlesPageHasMore,
    getArticlesPageNum,
} from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slices/articlesPageSlice';

import {
  fetchArticlesList,
  FetchArticlesListArgs,
} from "../fetchArticlesList/fetchArticlesList";

export const fetchNextArticlesPage = createAsyncThunk<
    void,
    Omit<FetchArticlesListArgs, 'replace'>,
    ThunkConfig<string>
>('articlesPage/fetchNextArticlesPage', async (args, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());

    if (hasMore) {
        dispatch(articlesPageActions.setPage(page + 1));
        dispatch(fetchArticlesList(args));
    }
});

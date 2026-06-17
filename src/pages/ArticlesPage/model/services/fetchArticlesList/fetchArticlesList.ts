import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { SortOrder } from "@/shared/types/sort";

import { Article, ArticleSortField, ArticleType } from "@/entities/Article";

import {
  getArticlesPageLimit,
  getArticlesPageNum,
} from "../../selectors/articlesPage";

export interface FetchArticlesListArgs {
    replace?: boolean;

    sort?: ArticleSortField;
    order?: SortOrder
    search?: string;
    type?: ArticleType;
}

export const fetchArticlesList = createAsyncThunk<
    Article[],
    FetchArticlesListArgs | undefined,
    ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (args, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const { order, type, search, sort } = args || {};

    const limit = getArticlesPageLimit(getState());
    const page = getArticlesPageNum(getState());

    try {
        const response = await extra.api.get<Article[]>('/articles', {
            params: {
                _expand: 'user',
                _limit: limit,
                _page: page,
                _sort: sort,
                _order: order,
                q: search,
                type: type === ArticleType.ALL ? undefined : type,
            },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});

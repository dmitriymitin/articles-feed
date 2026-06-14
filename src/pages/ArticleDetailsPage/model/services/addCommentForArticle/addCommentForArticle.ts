import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

import { Article } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';

export const addCommentForArticle = createAsyncThunk<
    Comment,
    {
        comment: string;
        articleId: Article['id'];
    },
    ThunkConfig<string>
>('articleDetails/addCommentForArticle', async ({ comment, articleId }, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const userData = getUserAuthData(getState());

    if (!userData || !comment) {
        return rejectWithValue('no data');
    }

    try {
        const response = await extra.api.post<Comment>('/comments', {
            articleId,
            userId: userData.id,
            text: comment,
        });

        if (!response.data) {
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(articleId));

        return response.data;
    } catch (e) {
        return rejectWithValue('Ошибка при добавлении комментария');
    }
});

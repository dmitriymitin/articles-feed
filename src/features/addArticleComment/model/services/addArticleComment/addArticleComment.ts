import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Article } from '@/entities/article';
import { Comment } from '@/entities/comment';
import { getUserAuthData } from '@/entities/user';

export const addArticleComment = createAsyncThunk<
    Comment,
    {
        comment: string;
        articleId: Article['id'];
    },
    ThunkConfig<string>
>('articleDetails/addArticleComment', async ({ comment, articleId }, thunkApi) => {
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

        return response.data;
    } catch (e) {
        return rejectWithValue('Ошибка при добавлении комментария');
    }
});

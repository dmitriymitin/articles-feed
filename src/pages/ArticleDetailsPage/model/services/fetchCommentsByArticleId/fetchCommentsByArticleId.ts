import { createAsyncThunk } from '@reduxjs/toolkit'

import { ThunkConfig } from '@/app/providers/StoreProvider';

import { Article } from "@/entities/article";
import { Comment } from '@/entities/comment';


/**
 * Устарел, перехал на ртк в отдельный компонент
 * @deprecated
 */
export const fetchCommentsByArticleId = createAsyncThunk<
    Comment[],
    Required<Article['id']>,
    ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Comment[]>('/comments', {
            params: {
                articleId,
                _expand: 'user',
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

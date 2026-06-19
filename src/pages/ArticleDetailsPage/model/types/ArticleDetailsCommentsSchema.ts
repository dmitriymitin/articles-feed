import { EntityState } from '@reduxjs/toolkit'

import { Comment } from '@/entities/Comment';

/** @deprecated */
export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}

import { EntityState } from '@reduxjs/toolkit'

import { Article } from '@/entities/article';

/** @deprecated */
export interface ArticleDetailsRecommendationsSchema
    extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}

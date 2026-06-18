import { lazy } from 'react'

export const ArticleRecommendationsListAsync = lazy(
    () => import('./ArticleRecommendationsList'),
);

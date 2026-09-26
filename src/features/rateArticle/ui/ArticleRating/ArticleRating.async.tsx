import { lazy, Suspense } from 'react';

import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';

import { ArticleRatingProps } from './ArticleRating';

const ArticleRatingLazy = lazy(() => import('./ArticleRating'));

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<SkeletonDeprecated width="100%" height={140} />}>
      <ArticleRatingLazy {...props} />
    </Suspense>
  );
};

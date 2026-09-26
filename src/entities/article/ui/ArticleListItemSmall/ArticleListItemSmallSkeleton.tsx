import React from 'react';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';

import s from './ArticleListItemSmall.module.scss';

interface ArticleListItemSmallSkeletonProps {
  className?: string;
}

export const ArticleListItemSmallSkeleton = (
  props: ArticleListItemSmallSkeletonProps,
) => {
  const { className } = props;

  return (
    <div className={className}>
      <CardDeprecated className={s.card}>
        <div className={s.imageWrapper}>
          <SkeletonDeprecated width={200} height={200} className={s.img} />
        </div>
        <div className={s.infoWrapper}>
          <SkeletonDeprecated width={130} height={16} />
        </div>
        <SkeletonDeprecated width={150} height={16} className={s.title} />
      </CardDeprecated>
    </div>
  );
};

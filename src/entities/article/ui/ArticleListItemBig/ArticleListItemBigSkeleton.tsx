import React from 'react';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';

import s from './ArticleListItemBig.module.scss';

interface ArticleListItemBigSkeletonProps {
  className?: string;
}

export const ArticleListItemBigSkeleton = (
  props: ArticleListItemBigSkeletonProps,
) => {
  const { className } = props;

  return (
    <div className={className}>
      <CardDeprecated>
        <div className={s.header}>
          <SkeletonDeprecated border="50%" height={30} width={30} />
          <SkeletonDeprecated width={150} height={16} className={s.username} />
          <SkeletonDeprecated width={150} height={16} className={s.date} />
        </div>
        <SkeletonDeprecated width={250} height={24} className={s.title} />
        <SkeletonDeprecated height={200} className={s.img} />
        <div className={s.footer}>
          <SkeletonDeprecated height={36} width={200} />
        </div>
      </CardDeprecated>
    </div>
  );
};

import React from 'react';

import { Card } from "@/shared/ui/Card";
import { Skeleton } from "@/shared/ui/Skeleton";

import s from './ArticleListItemSmall.module.scss'

interface ArticleListItemSmallSkeletonProps {
  className?: string
}

export const ArticleListItemSmallSkeleton = (props: ArticleListItemSmallSkeletonProps) => {
  const { className } = props

  return (
    <div className={className}>
      <Card className={s.card}>
        <div className={s.imageWrapper}>
          <Skeleton
            width={200}
            height={200}
            className={s.img}
          />
        </div>
        <div className={s.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={s.title} />
      </Card>
    </div>
  );
};

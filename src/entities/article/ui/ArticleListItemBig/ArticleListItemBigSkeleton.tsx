import React from 'react';

import { Card } from "@/shared/ui/Card";
import { Skeleton } from "@/shared/ui/Skeleton";

import s from './ArticleListItemBig.module.scss'

interface ArticleListItemBigSkeletonProps {
  className?: string;
}

export const ArticleListItemBigSkeleton = (props: ArticleListItemBigSkeletonProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <Card>
        <div className={s.header}>
          <Skeleton border="50%" height={30} width={30} />
          <Skeleton
            width={150}
            height={16}
            className={s.username}
          />
          <Skeleton
            width={150}
            height={16}
            className={s.date}
          />
        </div>
        <Skeleton width={250} height={24} className={s.title} />
        <Skeleton height={200} className={s.img} />
        <div className={s.footer}>
          <Skeleton height={36} width={200} />
        </div>
      </Card>
    </div>
  );
};

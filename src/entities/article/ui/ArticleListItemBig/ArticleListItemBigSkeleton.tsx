import React from 'react';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

import s from './ArticleListItemBig.module.scss';

interface ArticleListItemBigSkeletonProps {
  className?: string;
}

export const ArticleListItemBigSkeleton = (
  props: ArticleListItemBigSkeletonProps,
) => {
  const { className } = props;

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  const cardContent = (
    <>
      <div className={s.header}>
        <Skeleton border="50%" height={30} width={30} />
        <Skeleton width={150} height={16} className={s.username} />
        <Skeleton width={150} height={16} className={s.date} />
      </div>
      <Skeleton width={250} height={24} className={s.title} />
      <Skeleton height={200} className={s.img} />
      <div className={s.footer}>
        <Skeleton height={36} width={200} />
      </div>
    </>
  );

  const mainCls = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => s.redesignedSkeletonWrapper,
    off: () => undefined,
  });

  return (
    <div className={cn(s.ArticleListItemBigDeprecated, className, mainCls)}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<CardRedesigned className={s.card}>{cardContent}</CardRedesigned>}
        off={<CardDeprecated>{cardContent}</CardDeprecated>}
      />
    </div>
  );
};

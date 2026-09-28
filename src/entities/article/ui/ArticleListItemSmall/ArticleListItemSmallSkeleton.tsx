import React from 'react';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

import s from './ArticleListItemSmall.module.scss';

interface ArticleListItemSmallSkeletonProps {
  className?: string;
}

export const ArticleListItemSmallSkeleton = (
  props: ArticleListItemSmallSkeletonProps,
) => {
  const { className } = props;

  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  const cardContent = (
    <>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Skeleton width="100%" height={150} border="32px" className={s.img} />
        }
        off={
          <div className={s.imageWrapper}>
            <Skeleton width={200} height={200} className={s.img} />
          </div>
        }
      />
      <div className={s.infoWrapper}>
        <Skeleton width={130} height={16} />
      </div>
      <Skeleton width={150} height={16} className={s.title} />
    </>
  );

  return (
    <div className={cn(s.ArticleListItemSmallDeprecated, className)}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <CardRedesigned border="round" className={s.cardRedesigned}>
            {cardContent}
          </CardRedesigned>
        }
        off={<CardDeprecated className={s.card}>{cardContent}</CardDeprecated>}
      />
    </div>
  );
};

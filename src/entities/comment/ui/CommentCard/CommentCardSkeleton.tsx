import React from 'react';

import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { toggleFeatures } from '@/shared/lib/features';

import { CommentCardWrapper } from './CommentCardWrapper';

import s from './CommentCard.module.scss';

export const CommentCardSkeleton = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  return (
    <CommentCardWrapper loading>
      <div className={s.header}>
        <Skeleton width={30} height={30} border="50%" />
        <Skeleton height={16} width={100} className={s.username} />
      </div>
      <Skeleton className={s.text} width="100%" height={50} />
    </CommentCardWrapper>
  );
};

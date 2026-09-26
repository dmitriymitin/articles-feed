import React from 'react';

import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';

import { CommentCardWrapper } from './CommentCardWrapper';

import s from './CommentCard.module.scss';

export const CommentCardSkeleton = () => {
  return (
    <CommentCardWrapper loading>
      <div className={s.header}>
        <SkeletonDeprecated width={30} height={30} border="50%" />
        <SkeletonDeprecated height={16} width={100} className={s.username} />
      </div>
      <SkeletonDeprecated className={s.text} width="100%" height={50} />
    </CommentCardWrapper>
  );
};

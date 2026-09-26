import React from 'react';

import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Flex } from '@/shared/ui/redesigned/Flex';

import s from './ArticleDetails.module.scss';

export const ArticleDetailsSkeleton = () => {
  return (
    <Flex vertical max gap="16">
      <SkeletonDeprecated
        className={s.avatar}
        width={200}
        height={200}
        border="50%"
      />
      <SkeletonDeprecated className={s.title} width={300} height={32} />
      <SkeletonDeprecated className={s.skeleton} width={600} height={24} />
      <SkeletonDeprecated className={s.skeleton} width="100%" height={200} />
      <SkeletonDeprecated className={s.skeleton} width="100%" height={200} />
    </Flex>
  );
};

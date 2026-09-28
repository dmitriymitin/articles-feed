import React from 'react';

import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { toggleFeatures } from '@/shared/lib/features';

import s from './ArticleDetails.module.scss';

export const ArticleDetailsSkeleton = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  return (
    <Flex vertical max gap="16">
      <Skeleton className={s.avatar} width={200} height={200} border="50%" />
      <Skeleton className={s.title} width={300} height={32} />
      <Skeleton className={s.skeleton} width={600} height={24} />
      <Skeleton className={s.skeleton} width="100%" height={200} />
      <Skeleton className={s.skeleton} width="100%" height={200} />
    </Flex>
  );
};

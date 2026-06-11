import React from "react";

import { Skeleton } from "@/shared/ui/Skeleton";

import s from './ArticleDetails.module.scss'

export const ArticleDetailsSkeleton = () => {
  return (
    <div className={s.skeletonContainer}>
      <Skeleton
        className={s.avatar}
        width={200}
        height={200}
        border="50%"
      />
      <Skeleton className={s.title} width={300} height={32} />
      <Skeleton className={s.skeleton} width={600} height={24} />
      <Skeleton className={s.skeleton} width="100%" height={200} />
      <Skeleton className={s.skeleton} width="100%" height={200} />
    </div>
  );
};

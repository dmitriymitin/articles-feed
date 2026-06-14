import React from 'react';

import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";

import { cn } from "@/shared/lib/classNames/classNames";

import s from './CommentCard.module.scss'

interface CommentCardSkeletonProps {
  className?: string;
}

export const CommentCardSkeleton = (props: CommentCardSkeletonProps) => {
  const { className } = props;
  const classNames = cn(s.CommentCard, className, s.loading)

  return (
    <Flex
      data-testid="CommentCard.Loading"
      vertical
      gap="8"
      max
      className={classNames}
    >
      <div className={s.header}>
        <Skeleton width={30} height={30} border="50%" />
        <Skeleton
          height={16}
          width={100}
          className={s.username}
        />
      </div>
      <Skeleton className={s.text} width="100%" height={50} />
    </Flex>
  );
};

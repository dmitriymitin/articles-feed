import React, { PropsWithChildren } from "react";

import { Flex } from "@/shared/ui/Flex";

import { cn } from "@/shared/lib/classNames/classNames";

import s from "./CommentCard.module.scss";


interface CommentCardWrapperProps extends PropsWithChildren {
  loading?: boolean;
}

export const CommentCardWrapper = (props: CommentCardWrapperProps) => {
  const { children, loading } = props

  return (
    <Flex
      vertical
      data-testid="CommentCard.Content"
      gap="8"
      max
      className={cn(s.CommentCard, { [s.loading]: loading })}
     >
      {children}
    </Flex>
  );
};

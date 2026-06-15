import React from 'react';

import { Text } from "@/shared/ui/Text";

import { ArticleType } from "../../model/consts/articleConsts";

interface ArticleListItemTypesProps {
  type: ArticleType[]
  className?: string
}

export const ArticleListItemTypes = (props: ArticleListItemTypesProps) => {
  const { type, className } = props

  return (
    <Text text={type.join(', ')} className={className} />
  );
};

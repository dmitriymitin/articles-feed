import React from 'react';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

import { ArticleType } from '../../model/consts/articleConsts';

interface ArticleListItemTypesProps {
  type: ArticleType[];
  className?: string;
}

export const ArticleListItemTypes = (props: ArticleListItemTypesProps) => {
  const { type, className } = props;

  return <TextDeprecated text={type.join(', ')} className={className} />;
};

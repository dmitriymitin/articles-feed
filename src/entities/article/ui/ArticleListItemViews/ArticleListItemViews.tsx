import React from 'react';

import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

interface ArticleListItemViewsProps {
  className?: string;
  views: number;
}

export const ArticleListItemViews = (props: ArticleListItemViewsProps) => {
  const { className, views } = props;
  return (
    <Flex gap="4" align="center">
      <TextDeprecated text={views} className={className} />
      <IconDeprecated Svg={EyeIcon} />
    </Flex>
  );
};

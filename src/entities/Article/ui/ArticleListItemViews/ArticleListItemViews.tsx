import React from 'react'

import { Flex } from "@/shared/ui/Flex";
import { Icon } from "@/shared/ui/Icon";
import { Text } from "@/shared/ui/Text";

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';

interface ArticleListItemViewsProps {
  className?: string;
  views: number;
}

export const ArticleListItemViews = (props: ArticleListItemViewsProps) => {
  const { className, views } = props
  return (
    <Flex gap="4" align='center'>
      <Text text={views} className={className} />
      <Icon Svg={EyeIcon} />
    </Flex>
  );
};

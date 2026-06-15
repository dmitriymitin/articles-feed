import React from 'react'

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
    <>
      <Text text={views} className={className} />
      <Icon Svg={EyeIcon} />
    </>
  );
};

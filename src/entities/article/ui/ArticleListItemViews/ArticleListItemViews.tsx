import React from 'react';

import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';

import EyeIcon from '@/shared/assets/icons/eye.svg';
import EyeIconDeprecated from '@/shared/assets/icons/eye-20-20.svg';

import { ToggleFeatures } from '../../../../shared/lib/features';

interface ArticleListItemViewsProps {
  className?: string;
  views: number;
}

export const ArticleListItemViews = (props: ArticleListItemViewsProps) => {
  const { className, views } = props;

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Flex gap="8" align="center">
          <Icon Svg={EyeIcon} />
          <Text text={views} className={className} />
        </Flex>
      }
      off={
        <>
          <TextDeprecated text={views} className={className} />
          <IconDeprecated Svg={EyeIconDeprecated} />
        </>
      }
    />
  );
};

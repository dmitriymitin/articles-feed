import React from 'react';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import { ArticleImageBlock } from '../../model/types/article';

import s from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (
  props: ArticleImageBlockComponentProps,
) => {
  const { className, block } = props;

  return (
    <div className={cn(s.ArticleImageBlockComponent, className)}>
      <img src={block.src} alt={block.title} className={s.img} />
      {block.title && (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text text={block.title} align="center" />}
          off={<TextDeprecated text={block.title} align="center" />}
        />
      )}
    </div>
  );
};

import React from 'react';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import { ArticleTextBlock } from '../../model/types/article';

import s from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (
  props: ArticleTextBlockComponentProps,
) => {
  const { className, block } = props;

  return (
    <div className={cn(s.ArticleTextBlockComponent, className)}>
      {block.title && (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text title={block.title} className={s.title} />}
          off={<TextDeprecated title={block.title} className={s.title} />}
        />
      )}
      {block.paragraphs.map((paragraph, index) => (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={<Text key={paragraph} text={paragraph} className={s.paragraph} />}
          off={
            <TextDeprecated
              key={paragraph}
              text={paragraph}
              className={s.paragraph}
            />
          }
        />
      ))}
    </div>
  );
};

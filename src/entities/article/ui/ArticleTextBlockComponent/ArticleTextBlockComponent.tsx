import React from 'react';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

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
    <div className={className}>
      {block.title && (
        <TextDeprecated title={block.title} className={s.title} />
      )}
      {block.paragraphs.map((paragraph, index) => (
        <TextDeprecated key={index} text={paragraph} className={s.paragraph} />
      ))}
    </div>
  );
};

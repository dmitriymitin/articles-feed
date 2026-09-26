import React from 'react';

import { Code as CodeDeprecated } from '@/shared/ui/deprecated/Code';

import { cn } from '@/shared/lib/classNames/classNames';

import { ArticleCodeBlock } from '../../model/types/article';

import s from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (
  props: ArticleCodeBlockComponentProps,
) => {
  const { className, block } = props;

  return (
    <div className={cn(s.ArticleCodeBlockComponent, className)}>
      <CodeDeprecated text={block.code} />
    </div>
  );
};

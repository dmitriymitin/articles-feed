import React from 'react';

import { Code } from "@/shared/ui/Code";

import { cn } from "@/shared/lib/classNames/classNames";

import { ArticleCodeBlock } from "../../model/types/article";

import s from './ArticleCodeBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={cn(s.ArticleCodeBlockComponent, className)}>
      <Code text={block.code} />
    </div>
  );
};

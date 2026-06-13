import React from 'react';

import { Code } from "@/shared/ui/Code";

import { cn } from "@/shared/lib/classNames/classNames";

import { ArticleCodeBlock } from "../../model/types/article";

import s from './ArticleDetailsCode.module.scss'

interface ArticleDetailsCodeProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleDetailsCode = (props: ArticleDetailsCodeProps) => {
  const { className, block } = props;

  return (
    <div className={cn(s.ArticleDetailsCode, className)}>
      <Code text={block.code} />
    </div>
  );
};

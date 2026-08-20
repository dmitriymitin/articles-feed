import React from 'react';

import { Text } from "@/shared/ui/Text";

import { ArticleTextBlock } from "../../model/types/article";

import s from "./ArticleTextBlockComponent.module.scss"

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={className}>
      {block.title && (
        <Text
          title={block.title}
          className={s.title}
        />
      )}
      {block.paragraphs.map((paragraph, index) => (
        <Text
          key={index}
          text={paragraph}
          className={s.paragraph}
        />
      ))}
    </div>
  );
};

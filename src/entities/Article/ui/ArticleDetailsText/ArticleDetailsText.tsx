import React from 'react';

import { Text } from "@/shared/ui/Text";

import { ArticleTextBlock } from "../../model/types/article";

import s from "./ArticleDetailsText.module.scss"

interface ArticleDetailsTextProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleDetailsText = (props: ArticleDetailsTextProps) => {
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
          key={paragraph}
          text={paragraph}
          className={s.paragraph}
        />
      ))}
    </div>
  );
};

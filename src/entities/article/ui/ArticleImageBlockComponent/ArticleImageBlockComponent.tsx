import React from 'react';

import { AppImage } from "@/shared/ui/AppImage";
import { Text } from "@/shared/ui/Text";

import { ArticleImageBlock } from "../../model/types/article";

import s from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
    <div className={className}>
      <AppImage src={block.src} alt={block.title} className={s.img} />
      {block.title && (
        <Text
          text={block.title}
          align='center'
        />
      )}
    </div>
  );
};

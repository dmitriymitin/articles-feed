import React from 'react';

import { Image } from "@/shared/ui/Image";
import { Text } from "@/shared/ui/Text";

import { ArticleImageBlock } from "../../model/types/article";

import s from './ArticleDetailsImage.module.scss'

interface ArticleDetailsImageProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleDetailsImage = (props: ArticleDetailsImageProps) => {
  const { className, block } = props;

  return (
    <div className={className}>
      <Image src={block.src} alt={block.title} className={s.img} />
      {block.title && (
        <Text
          text={block.title}
          align='center'
        />
      )}
    </div>
  );
};

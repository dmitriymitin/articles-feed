import React from 'react';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

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
    <div className={className}>
      <AppImage src={block.src} alt={block.title} className={s.img} />
      {block.title && <TextDeprecated text={block.title} align="center" />}
    </div>
  );
};

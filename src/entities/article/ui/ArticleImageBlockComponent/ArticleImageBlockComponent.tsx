import React from 'react';

import { AppImage as AppImageDeprecated } from '@/shared/ui/deprecated/AppImage';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

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
      <AppImageDeprecated src={block.src} alt={block.title} className={s.img} />
      {block.title && <TextDeprecated text={block.title} align="center" />}
    </div>
  );
};

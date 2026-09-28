import {
  ArticleListItemBigSkeleton,
  ArticleListItemSmallSkeleton,
  ArticleView,
} from '@/entities/article';

import { RenderArticleItemOptions } from './ArticleInfiniteList';

export const renderArticleListItemSkeleton = (
  view: ArticleView,
  index: number,
  options: RenderArticleItemOptions,
) => {
  const { classNameSmall, classNameBig } = options;

  switch (view) {
    case ArticleView.BIG:
      return (
        <ArticleListItemBigSkeleton key={index} className={classNameBig} />
      );
    case ArticleView.SMALL:
      return (
        <ArticleListItemSmallSkeleton key={index} className={classNameSmall} />
      );
    default:
      return null;
  }
};

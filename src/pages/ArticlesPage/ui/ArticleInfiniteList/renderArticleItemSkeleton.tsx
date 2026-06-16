import {
  ArticleListItemBigSkeleton,
  ArticleListItemSmallSkeleton,
  ArticleView,
} from "@/entities/Article";

import s from './ArticleInfiniteList.module.scss'

export const renderArticleListItemSkeleton = (view: ArticleView, index: number) => {
  switch (view) {
    case ArticleView.BIG:
      return <ArticleListItemBigSkeleton key={index} className={s.card} />
    case ArticleView.SMALL:
      return <ArticleListItemSmallSkeleton key={index} className={s.card} />
    default:
      return null;
  }
};

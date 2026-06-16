import {
  Article,
  ArticleListItemBig,
  ArticleListItemSmall,
  ArticleView,
} from "@/entities/Article";

import s from './ArticleInfiniteList.module.scss'

export const renderArticleListItem = (view: ArticleView, article: Article) => {
  switch (view) {
    case ArticleView.BIG:
      return <ArticleListItemBig key={article.id} article={article} className={s.card} />
    case ArticleView.SMALL:
      return <ArticleListItemSmall key={article.id} article={article} className={s.card} />
    default:
      return null;
  }
};

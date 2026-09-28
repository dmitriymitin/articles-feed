import {
  Article,
  ArticleListItemBig,
  ArticleListItemSmall,
  ArticleView,
} from '@/entities/article';

import { toggleFeatures } from '../../../../shared/lib/features';

import { RenderArticleItemOptions } from './ArticleInfiniteList';

import s from './ArticleInfiniteList.module.scss';

export const renderArticleListItem = (
  view: ArticleView,
  article: Article,
  options: RenderArticleItemOptions,
) => {
  const { classNameSmall, classNameBig } = options;

  switch (view) {
    case ArticleView.BIG: {
      const cls = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => undefined,
        off: () => s.cardBig,
      });

      return (
        <ArticleListItemBig
          key={article.id}
          article={article}
          className={classNameBig}
        />
      );
    }
    case ArticleView.SMALL: {
      const cls = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => undefined,
        off: () => s.cardSmall,
      });

      return (
        <ArticleListItemSmall
          key={article.id}
          article={article}
          className={classNameSmall}
        />
      );
    }
    default:
      return null;
  }
};

import {
  Article,
  ArticleListItemBig,
  ArticleListItemSmall,
  ArticleView,
} from "@/entities/Article";

export const renderArticleListItem = (view: ArticleView, article: Article) => {
  switch (view) {
    case ArticleView.BIG:
      return <ArticleListItemBig key={article.id} article={article} />
    case ArticleView.SMALL:
      return <ArticleListItemSmall key={article.id} article={article} />
    default:
      return null;
  }
};

export { getArticleDetailsData } from "./model/selectors/articleDetails";

export type { Article } from "./model/types/article";
export type { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";

export { articleRecommendationsListLimit } from "./model/consts/articleRecomadationsConst";
export {
  ArticleView,
  ArticleType,
  ArticleSortField,
  ArticleBlockType,
  articleTypeTabsItems,
  articleSortSelectOptions,
} from "./model/consts/articleConsts";

export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";

export { ArticleListItemBigAsync as ArticleListItemBig } from "./ui/ArticleListItemBig/ArticleListItemBig.async";
export { ArticleListItemBigSkeleton } from "./ui/ArticleListItemBig/ArticleListItemBigSkeleton";

export { ArticleListItemSmallAsync as ArticleListItemSmall } from "./ui/ArticleListItemSmall/ArticleListItemSmall.async";
export { ArticleListItemSmallSkeleton } from "./ui/ArticleListItemSmall/ArticleListItemSmallSkeleton";

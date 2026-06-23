export type { Article } from "./model/types/article";

export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";

export type { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";

export { getArticleDetailsData } from "@/entities/Article/model/selectors/articleDetails";

export {
  ArticleView,
  ArticleType,
  ArticleSortField,
  ArticleBlockType,
  articleTypeTabsItems,
  articleSortSelectOptions,
} from "./model/consts/articleConsts";

export { articleRecommendationsListLimit } from "./model/consts/articleRecomadationsConst";

export { ArticleListItemBigAsync as ArticleListItemBig } from "./ui/ArticleListItemBig/ArticleListItemBig.async";
export { ArticleListItemBigSkeleton } from "./ui/ArticleListItemBig/ArticleListItemBigSkeleton";

export { ArticleListItemSmallAsync as ArticleListItemSmall } from "./ui/ArticleListItemSmall/ArticleListItemSmall.async";
export { ArticleListItemSmallSkeleton } from "./ui/ArticleListItemSmall/ArticleListItemSmallSkeleton";

export type { Article } from './model/types/article';

export { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";

export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { getArticleDetailsData } from "@/entities/Article/model/selectors/articleDetails";

export {
  ArticleView,
  ArticleType,
  ArticleSortField,
  ArticleBlockType,
  articleTypeTabsItems,
  articleSortSelectOptions,
} from './model/consts/articleConsts';

export { ArticleListItemBig } from './ui/ArticleListItemBig/ArticleListItemBig'
export { ArticleListItemBigSkeleton } from './ui/ArticleListItemBig/ArticleListItemBigSkeleton'

export { ArticleListItemSmall } from './ui/ArticleListItemSmall/ArticleListItemSmall'
export { ArticleListItemSmallSkeleton } from './ui/ArticleListItemSmall/ArticleListItemSmallSkeleton'

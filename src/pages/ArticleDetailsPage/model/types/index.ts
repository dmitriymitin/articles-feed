import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { ArticleDetailsRecommendationsSchema } from "./ArticleDetailsRecommendationsSchema";

export interface ArticleDetailsPageSchema {
  /** @deprecated */
  comments: ArticleDetailsCommentsSchema;
  /** @deprecated */
  recommendations: ArticleDetailsRecommendationsSchema;
}

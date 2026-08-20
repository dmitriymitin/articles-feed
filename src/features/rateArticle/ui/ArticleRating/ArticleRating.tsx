import { useSelector } from "react-redux";

import { Skeleton } from "@/shared/ui/Skeleton";

import { Article } from "@/entities/article";
import { RatingCard } from "@/entities/rating";
import { getUserAuthData } from "@/entities/user";

import {
  useArticleRatingMutation,
  useArticleRatingQuery,
} from "../../api/articleRatingApi";

export interface ArticleRatingProps {
  className?: string;
  articleId: Article["id"];
}

const ArticleRating = (props: ArticleRatingProps) => {
  const { className, articleId } = props;
  const userData = useSelector(getUserAuthData)!;

  const { data, isLoading, error } = useArticleRatingQuery({
    articleId,
    userId: userData.id,
  });
  const [rateArticleMutation] = useArticleRatingMutation();

  const handleRateArticle = (starsCount: number, feedback?: string) => {
    rateArticleMutation({
      userId: userData?.id ?? "",
      articleId,
      rate: starsCount,
      feedback,
    });
  };

  const onAccept = (starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  };

  const onCancel = (starsCount: number) => {
    handleRateArticle(starsCount);
  };

  if (isLoading) {
    return <Skeleton width="100%" height={120} />;
  }

  if (error || !data) {
    return <></>;
  }

  const rating = data[0];

  return (
    <RatingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      className={className}
      title="Оцените статью"
      feedbackTitle="Оставьте свой отзыв о статье, это поможет улучшить качество"
      hasFeedback
    />
  );
};

export default ArticleRating;

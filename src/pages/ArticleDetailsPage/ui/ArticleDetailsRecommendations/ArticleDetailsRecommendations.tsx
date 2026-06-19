import React, { Suspense } from "react";
import { useSelector } from "react-redux";

import { Loader } from "@/shared/ui/Loader";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";

import { ArticleRecommendationsList } from "@/widgets/ArticleRecommendationsList";

import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations/recommendations';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice/articleDetailsPageRecommendationsSlice';

export const ArticleDetailsRecommendations = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ArticleRecommendationsList />
    </Suspense>
  );
};

const ArticleDetailsRecommendationsOld = () => {
  const dispatch = useAppDispatch();

  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  );

  console.log("recommendations", recommendations);
  console.log("recommendationsIsLoading", recommendationsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchArticleRecommendations());
  }, []);

  return (
    <div />
  );
};

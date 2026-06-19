import { StateSchema } from "@/app/providers/StoreProvider";

/** @deprecated */
export const getArticleRecommendationsIsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.recommendations?.isLoading;
};

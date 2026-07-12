import { articleTestData1, articleTestData2 } from "@/entities/Article/mock";

import { ArticleDetailsRecommendationsSchema } from "../../../model/types/ArticleDetailsRecommendationsSchema";

import { fetchArticleRecommendations } from "../../services/fetchArticleRecommendations/fetchArticleRecommendations";

import {
  articleDetailsPageRecommendationsReducer,
  recommendationsAdapter,
} from "./articleDetailsPageRecommendationsSlice";

describe("articleDetailsCommentsSlice.test", () => {
  test("test get article details comments pending", () => {
    const state: DeepPartial<ArticleDetailsRecommendationsSchema> = {
      isLoading: false,
      error: "error",
    };

    expect(
      articleDetailsPageRecommendationsReducer(
        state as ArticleDetailsRecommendationsSchema,
        fetchArticleRecommendations.pending
      )
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test("test get article details comments rejected", () => {
    const state: DeepPartial<ArticleDetailsRecommendationsSchema> = {
      isLoading: true,
      error: undefined,
    };

    expect(
      articleDetailsPageRecommendationsReducer(
        state as ArticleDetailsRecommendationsSchema,
        {
          type: fetchArticleRecommendations.rejected.type,
          payload: "error",
        }
      )
    ).toEqual({
      isLoading: false,
      error: "error",
    });
  });

  test("test get article details comments fulfilled", () => {
    const state =
      recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>(
        {
          isLoading: true,
          error: undefined,
          ids: ["2"],
          entities: {},
        }
      );

    const recommendationsData = [articleTestData1, articleTestData2];

    expect(
      articleDetailsPageRecommendationsReducer(
        state as ArticleDetailsRecommendationsSchema,
        fetchArticleRecommendations.fulfilled(recommendationsData, "")
      )
    ).toEqual({
      ...recommendationsAdapter.setAll(state, recommendationsData),
      isLoading: false,
      error: undefined,
    });
  });
});

import { commentTestData } from "@/entities/Comment/mock";

import { ArticleDetailsCommentsSchema } from "../../..";
import { fetchCommentsByArticleId } from "../../services/fetchCommentsByArticleId/fetchCommentsByArticleId";

import {
  articleDetailsCommentsReducer,
  commentsAdapter,
} from "./articleDetailsCommentsSlice";

describe("articleDetailsCommentsSlice.test", () => {
  test("test get article details comments pending", () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: false,
      error: "error",
    };

    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.pending
      )
    ).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test("test get article details comments rejected", () => {
    const state: DeepPartial<ArticleDetailsCommentsSchema> = {
      isLoading: true,
      error: undefined,
    };

    expect(
      articleDetailsCommentsReducer(state as ArticleDetailsCommentsSchema, {
        type: fetchCommentsByArticleId.rejected.type,
        payload: "error",
      })
    ).toEqual({
      isLoading: false,
      error: "error",
    });
  });

  test("test get article details comments fulfilled", () => {
    const state = commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>(
      {
        isLoading: true,
        error: undefined,
        ids: ["2"],
        entities: {},
      }
    );

    const commentsData = [commentTestData, commentTestData];

    expect(
      articleDetailsCommentsReducer(
        state as ArticleDetailsCommentsSchema,
        fetchCommentsByArticleId.fulfilled(commentsData, "", "")
      )
    ).toEqual({
      ...commentsAdapter.setAll(state, commentsData),
      isLoading: false,
      error: undefined,
    });
  });
});

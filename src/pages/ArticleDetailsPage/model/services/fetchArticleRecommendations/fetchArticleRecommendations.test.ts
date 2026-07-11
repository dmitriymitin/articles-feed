import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { articleTestData1, articleTestData2 } from "@/entities/Article/mock";

import { fetchArticleRecommendations } from "./fetchArticleRecommendations";

describe("fetchArticleRecommendations.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecommendations);

    const articlesData = [articleTestData1, articleTestData2];
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articlesData }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(articlesData);
  });

  test("error fetchArticleRecommendations", async () => {
    const thunk = new TestAsyncThunk(fetchArticleRecommendations);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
  });
});

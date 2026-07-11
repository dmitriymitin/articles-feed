import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { articleTestData1 } from "@/entities/Article/mock";

import { fetchArticlesList } from "./fetchArticlesList";

describe("fetchArticlesList.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: {},
    });

    const articlesData = [articleTestData1];
    thunk.api.get.mockReturnValue(Promise.resolve({ data: articlesData }));

    const result = await thunk.callThunk({});

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(articlesData);
  });

  test("error fetchArticlesList", async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: {},
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({});

    expect(result.meta.requestStatus).toBe("rejected");
  });
});

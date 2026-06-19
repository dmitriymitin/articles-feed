import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

import { commentTestData } from "@/entities/Comment/testing";

import { addArticleComment } from "./addArticleComment";

describe("addArticleComment.test", () => {
  test("success add comment for article", async () => {
    const commentData = commentTestData;
    const articleId = '1'

    const thunk = new TestAsyncThunk(addArticleComment, { user: { authData: { id: '1' } } });
    thunk.api.post.mockReturnValue(Promise.resolve({ data: commentData }));
    const result = await thunk.callThunk({
      comment: "some comment",
      articleId
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);

    expect(thunk.api.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(commentData);
  });

  test("error add comment for article", async () => {

    const thunk = new TestAsyncThunk(addArticleComment, { user: { authData: { id: '1' } } });
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk({
      comment: "some comment",
      articleId: '1'
    });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);

    expect(thunk.api.post).toHaveBeenCalled();

    expect(result.meta.requestStatus).toBe("rejected");

    expect(result.payload).toBe("Ошибка при добавлении комментария");
  });
});

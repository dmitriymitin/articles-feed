import { StateSchema } from "@/app/providers/StoreProvider";

import { buildSelector } from "@/shared/lib/store/buildSelector";

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error;
export const getArticlesPageNum = (state: StateSchema) =>
  state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore;

export const [useArticleItemById] = buildSelector(
  (state, id: string) => state.articlesPage?.entities[id]
);

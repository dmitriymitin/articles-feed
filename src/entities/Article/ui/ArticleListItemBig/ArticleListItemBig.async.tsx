import { lazy } from "react";

export const ArticleListItemBigAsync = lazy(
  () => import("./ArticleListItemBig")
);

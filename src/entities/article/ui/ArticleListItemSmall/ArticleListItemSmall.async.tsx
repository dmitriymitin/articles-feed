import { lazy } from "react";

export const ArticleListItemSmallAsync = lazy(
  () => import("./ArticleListItemSmall")
);

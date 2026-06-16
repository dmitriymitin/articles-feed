import { parseAsString, parseAsStringEnum } from "nuqs"

import {
  ArticleSortField,
  ArticleType,
  ArticleView,
} from "../../entities/Article";

import { SortOrder, sortOrders } from "../types/sort";

export const articlesPageSearchParams = {
  search: parseAsString.withDefault(''),

  order: parseAsStringEnum<SortOrder>(
    [...sortOrders],
  ).withDefault('asc'),

  sort: parseAsStringEnum<ArticleSortField>(
    Object.values(ArticleSortField),
  ).withDefault(ArticleSortField.CREATED),

  type: parseAsStringEnum<ArticleType>(
    Object.values(ArticleType),
  ).withDefault(ArticleType.ALL),

  view: parseAsStringEnum<ArticleView>(
    Object.values(ArticleView),
  ).withDefault(ArticleView.SMALL),
} as const

import React from 'react';

import { ReducersList } from "@/app/providers/StoreProvider";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { articlesPageReducer } from "../../model/slices/articlesPageSlice";

import { ArticleInfiniteListContainer } from '../ArticleInfiniteListContainer/ArticleInfiniteListContainer';
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

import s from './ArticlesPage.module.scss'

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const _ArticlesPage = () => {
  return (
    <div className={s.ArticlesPage}>
      <ArticlesPageFilters />
      <ArticleInfiniteListContainer className={s.list} />
    </div>
  );
};

const ArticlesPage: typeof _ArticlesPage = () => (
  <DynamicModuleLoader reducers={reducers}>
    <_ArticlesPage />
  </DynamicModuleLoader>
)

export default ArticlesPage;

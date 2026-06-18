import React, { MutableRefObject, useRef } from "react";
import { useQueryStates } from "nuqs";

import { cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useInView } from "@/shared/lib/hooks/useInView/useInView";
import { articlesPageSearchParams } from "@/shared/const/searchParams";

import { fetchArticlesList, FetchArticlesListArgs } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';

import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

import s from '../ArticleInfiniteList/ArticleInfiniteList.module.scss';

interface ArticleInfiniteListContainerProps {
  className?: string;
}

export const ArticleInfiniteListContainer = (props: ArticleInfiniteListContainerProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();
  const [searchParams] = useQueryStates(articlesPageSearchParams)

  const triggerLoadArticlesRef = useRef() as MutableRefObject<HTMLDivElement>;

  const fetchArticleArgs: FetchArticlesListArgs = {
    sort: searchParams.sort,
    search: searchParams.search,
    type: searchParams.type,
    order: searchParams.order,
  }

  const loadFirstArticles = () => {
    dispatch(articlesPageActions.setPage(1));
    dispatch(fetchArticlesList({ ...fetchArticleArgs, replace: true }))
  }

  const loadNextArticles = () => {
    dispatch(fetchNextArticlesPage(fetchArticleArgs));
  }

  useInitialEffect(() => {
    loadFirstArticles();
  }, Object.values(fetchArticleArgs));

  useInView(
    triggerLoadArticlesRef,
    loadNextArticles
  )

  return (
    <div
      className={cn(s[searchParams.view!], className)}
      data-testid="ArticleListWrapper"
    >
      <ArticleInfiniteList />
      <div ref={triggerLoadArticlesRef} className={s.trigger} />
    </div>
  );
};

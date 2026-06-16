import React from 'react';

import { useAppQueryState } from "@/shared/lib/hooks/useAppQueryState/useAppQueryState";
import { articlesPageSearchParams } from "@/shared/const/searchParams";

import { ArticleViewSelector } from "@/features/ArticleViewSelector";

export const ArticlesViewFilter = () => {
  const [view, setView] = useAppQueryState(articlesPageSearchParams, 'view')

  return (
    <ArticleViewSelector view={view} onViewClick={setView} />
  );
};

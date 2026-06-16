import React from 'react';

import { Tabs } from "@/shared/ui/Tabs";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAppQueryState } from "@/shared/lib/hooks/useAppQueryState/useAppQueryState";
import { articlesPageSearchParams } from "@/shared/const/router";

import { ArticleType, articleTypeTabsItems } from "@/entities/Article";

import { articlesPageActions } from "../../model/slices/articlesPageSlice";

export const ArticlesTypeFilter = () => {
  const dispatch = useAppDispatch();

  const [type, setType] = useAppQueryState(articlesPageSearchParams, 'type')

  return (
    <Tabs<ArticleType>
      value={type}
      tabs={articleTypeTabsItems}
      onTabClick={(type) => {
        dispatch(articlesPageActions.setPage(1));
        setType(type);
      }}
    />
  );
};

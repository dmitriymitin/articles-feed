import React from 'react';

import { Select } from "@/shared/ui/Select";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAppQueryState } from "@/shared/lib/hooks/useAppQueryState/useAppQueryState";
import { articlesPageSearchParams } from "@/shared/const/searchParams";
import { sortOrderOptions } from "@/shared/const/sort";

import { articlesPageActions } from "../../model/slices/articlesPageSlice";

interface ArticlesOrderFilterProps {
  className?: string;
}

export const ArticlesOrderFilter = (props: ArticlesOrderFilterProps) => {
  const { className } = props

  const dispatch = useAppDispatch();

  const [order, setOrder] = useAppQueryState(articlesPageSearchParams, 'order')

  return (
    <Select
      label="по"
      options={sortOrderOptions}
      value={order}
      onChange={(order) => {
        dispatch(articlesPageActions.setPage(1));
        setOrder(order);
      }}
      className={className}
    />
  );
};

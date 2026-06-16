import React, { useState } from "react";

import { Input } from "@/shared/ui/Input";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAppQueryState } from "@/shared/lib/hooks/useAppQueryState/useAppQueryState";
import { useDebounce } from "@/shared/lib/hooks/useDebounce/useDebounce";
import { articlesPageSearchParams } from "@/shared/const/router";

import { articlesPageActions } from "../../model/slices/articlesPageSlice";

export const ArticlesSearchFilter = () => {
  const dispatch = useAppDispatch();

  const [paramsSearch, setParamsSearch] = useAppQueryState(articlesPageSearchParams, 'search')
  const [search, setSearch] = useState<string>(paramsSearch || '')


  const debounceSetParamsSearch = useDebounce((search: string) => {
    dispatch(articlesPageActions.setPage(1));
    setParamsSearch(search);
  }, 500)

  const updateSearch = (search: string) => {
    setSearch(search);
    debounceSetParamsSearch(search);
  }

  return (
    <Input
      onChange={updateSearch}
      value={search}
      placeholder='Поиск'
    />
  );
};

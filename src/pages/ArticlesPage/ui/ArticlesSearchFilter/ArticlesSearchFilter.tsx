import React, { useState } from 'react';

import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Input } from '@/shared/ui/redesigned/Input';

import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppQueryState } from '@/shared/lib/hooks/useAppQueryState/useAppQueryState';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { articlesPageSearchParams } from '@/shared/const/searchParams';
import SearchIcon from '@/shared/assets/icons/search.svg';

import { articlesPageActions } from '../../model/slices/articlesPageSlice';

export const ArticlesSearchFilter = () => {
  const dispatch = useAppDispatch();

  const [paramsSearch, setParamsSearch] = useAppQueryState(
    articlesPageSearchParams,
    'search',
  );
  const [search, setSearch] = useState<string>(paramsSearch || '');

  const debounceSetParamsSearch = useDebounce((search: string) => {
    dispatch(articlesPageActions.setPage(1));
    setParamsSearch(search);
  }, 500);

  const updateSearch = (search: string) => {
    setSearch(search);
    debounceSetParamsSearch(search);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Input
          onChange={updateSearch}
          value={search}
          size="s"
          placeholder="Поиск"
          addonLeft={<Icon Svg={SearchIcon} />}
        />
      }
      off={
        <InputDeprecated
          onChange={updateSearch}
          value={search}
          placeholder="Поиск"
        />
      }
    />
  );
};

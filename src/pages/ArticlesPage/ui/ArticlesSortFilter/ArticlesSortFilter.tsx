import React from 'react';

import { Select as SelectDeprecated } from '@/shared/ui/deprecated/Select';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppQueryState } from '@/shared/lib/hooks/useAppQueryState/useAppQueryState';
import { articlesPageSearchParams } from '@/shared/const/searchParams';

import { articleSortSelectOptions } from '@/entities/article';

import { articlesPageActions } from '../../model/slices/articlesPageSlice';

export const ArticlesSortFilter = () => {
  const dispatch = useAppDispatch();

  const [sort, setSort] = useAppQueryState(articlesPageSearchParams, 'sort');

  return (
    <SelectDeprecated
      label="Сортировать ПО"
      value={sort}
      options={articleSortSelectOptions}
      onChange={(sort) => {
        dispatch(articlesPageActions.setPage(1));
        setSort(sort);
      }}
    />
  );
};

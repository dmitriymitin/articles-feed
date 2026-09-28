import React from 'react';

import { Select as SelectDeprecated } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppQueryState } from '@/shared/lib/hooks/useAppQueryState/useAppQueryState';
import { articlesPageSearchParams } from '@/shared/const/searchParams';

import { ArticleSortField, articleSortSelectOptions } from '@/entities/article';

import { articlesPageActions } from '../../model/slices/articlesPageSlice';

export const ArticlesSortFilter = () => {
  const dispatch = useAppDispatch();

  const [sort, setSort] = useAppQueryState(articlesPageSearchParams, 'sort');

  const onChangeSort = (sort: ArticleSortField) => {
    dispatch(articlesPageActions.setPage(1));
    setSort(sort);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <ListBox<ArticleSortField>
          items={articleSortSelectOptions}
          value={sort ?? undefined}
          onChange={onChangeSort}
        />
      }
      off={
        <SelectDeprecated<ArticleSortField>
          label="Сортировать ПО"
          value={sort}
          options={articleSortSelectOptions}
          onChange={onChangeSort}
        />
      }
    />
  );
};

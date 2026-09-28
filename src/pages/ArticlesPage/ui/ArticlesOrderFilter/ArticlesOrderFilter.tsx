import React from 'react';

import { Select as SelectDeprecated } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppQueryState } from '@/shared/lib/hooks/useAppQueryState/useAppQueryState';
import { articlesPageSearchParams } from '@/shared/const/searchParams';
import { sortOrderOptions } from '@/shared/const/sort';
import { SortOrder } from '@/shared/types/sort';

import { articlesPageActions } from '../../model/slices/articlesPageSlice';

interface ArticlesOrderFilterProps {
  className?: string;
}

export const ArticlesOrderFilter = (props: ArticlesOrderFilterProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const [order, setOrder] = useAppQueryState(articlesPageSearchParams, 'order');

  const onChangeOrder = (order: SortOrder) => {
    dispatch(articlesPageActions.setPage(1));
    setOrder(order);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <ListBox
          items={sortOrderOptions}
          value={order ?? undefined}
          onChange={onChangeOrder}
        />
      }
      off={
        <SelectDeprecated
          label="по"
          options={sortOrderOptions}
          value={order}
          onChange={onChangeOrder}
          className={className}
        />
      }
    />
  );
};

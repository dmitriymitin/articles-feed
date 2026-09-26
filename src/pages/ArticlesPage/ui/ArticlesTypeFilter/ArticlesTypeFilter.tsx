import React from 'react';

import { Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppQueryState } from '@/shared/lib/hooks/useAppQueryState/useAppQueryState';
import { articlesPageSearchParams } from '@/shared/const/searchParams';

import { articleTypeTabsItems } from '@/entities/article';

import { articlesPageActions } from '../../model/slices/articlesPageSlice';

interface ArticlesTypeFilterProps {
  className?: string;
}

export const ArticlesTypeFilter = (props: ArticlesTypeFilterProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const [type, setType] = useAppQueryState(articlesPageSearchParams, 'type');

  return (
    <TabsDeprecated
      className={className}
      value={type}
      tabs={articleTypeTabsItems}
      onTabClick={(type) => {
        dispatch(articlesPageActions.setPage(1));
        setType(type);
      }}
    />
  );
};

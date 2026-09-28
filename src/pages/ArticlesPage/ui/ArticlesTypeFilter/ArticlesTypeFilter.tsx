import React from 'react';

import { Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useAppQueryState } from '@/shared/lib/hooks/useAppQueryState/useAppQueryState';
import { articlesPageSearchParams } from '@/shared/const/searchParams';

import { ArticleType, articleTypeTabsItems } from '@/entities/article';

import { articlesPageActions } from '../../model/slices/articlesPageSlice';

interface ArticlesTypeFilterProps {
  className?: string;
}

export const ArticlesTypeFilter = (props: ArticlesTypeFilterProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const [type, setType] = useAppQueryState(articlesPageSearchParams, 'type');

  const onChangeType = (type: ArticleType) => {
    dispatch(articlesPageActions.setPage(1));
    setType(type);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Tabs<ArticleType>
          direction="column"
          tabs={articleTypeTabsItems}
          value={type}
          onTabClick={(tab) => onChangeType(tab.value)}
          className={className}
        />
      }
      off={
        <TabsDeprecated<ArticleType>
          className={className}
          value={type}
          tabs={articleTypeTabsItems}
          onTabClick={onChangeType}
        />
      }
    />
  );
};

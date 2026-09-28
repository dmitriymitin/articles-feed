import React from 'react';

import { ReducersList } from '@/app/providers/StoreProvider';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Text } from '@/shared/ui/redesigned/Text';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';

import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { Page } from '@/widgets/Page';

import { Card } from '../../../../shared/ui/redesigned/Card';

import { articlesPageReducer } from '../../model/slices/articlesPageSlice';

import { ArticleInfiniteListContainer } from '../ArticleInfiniteListContainer/ArticleInfiniteListContainer';
import { ArticlesOrderFilter } from '../ArticlesOrderFilter/ArticlesOrderFilter';
import { ArticlesSearchFilter } from '../ArticlesSearchFilter/ArticlesSearchFilter';
import { ArticlesSortFilter } from '../ArticlesSortFilter/ArticlesSortFilter';
import { ArticlesTypeFilter } from '../ArticlesTypeFilter/ArticlesTypeFilter';
import { ArticlesViewFilter } from '../ArticlesViewFilter/ArticlesViewFilter';

import s from './ArticlesPage.module.scss';

import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = () => {
  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <StickyContentLayout
          left={<ArticlesViewFilter />}
          right={
            <Card className={s.filtersRedesigned} padding="24">
              <Flex vertical gap="32">
                <ArticlesSearchFilter />
                <ArticlesTypeFilter />
                <Flex vertical gap="8">
                  <Text text="Сортировать по:" />
                  <ArticlesSortFilter />
                  <ArticlesOrderFilter className={s.order} />
                </Flex>
              </Flex>
            </Card>
          }
          content={
            <Page data-testid="ArticlesPage">
              <ArticleInfiniteListContainer />
              <ArticlePageGreeting />
            </Page>
          }
        />
      }
      off={
        <Page className={s.ArticlesPage} data-testid="ArticlesPage">
          <div>
            <Flex align="center" justify="between">
              <Flex align="center" gap="4">
                <ArticlesSortFilter />
                <ArticlesOrderFilter className={s.order} />
              </Flex>
              <ArticlesViewFilter />
            </Flex>
            <CardDeprecated className={s.search}>
              <ArticlesSearchFilter />
            </CardDeprecated>
            <ArticlesTypeFilter className={s.tabs} />
          </div>
          <ArticleInfiniteListContainer className={s.list} />
          <ArticlePageGreeting />
        </Page>
      }
    />
  );
};

export default () => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <ArticlesPage />
    </DynamicModuleLoader>
  );
};

import React from 'react';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { ArticlesOrderFilter } from '../ArticlesOrderFilter/ArticlesOrderFilter';
import { ArticlesSearchFilter } from '../ArticlesSearchFilter/ArticlesSearchFilter';
import { ArticlesSortFilter } from '../ArticlesSortFilter/ArticlesSortFilter';
import { ArticlesTypeFilter } from '../ArticlesTypeFilter/ArticlesTypeFilter';
import { ArticlesViewFilter } from '../ArticlesViewFilter/ArticlesViewFilter';

import s from './ArticlesPageFilters.module.scss';

export const ArticlesPageFilters = () => {
  return (
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
  );
};

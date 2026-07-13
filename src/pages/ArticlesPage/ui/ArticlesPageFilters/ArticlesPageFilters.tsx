import React from "react";

import { Card } from "@/shared/ui/Card";
import { Flex } from "@/shared/ui/Flex";

import { ArticlesOrderFilter } from "../ArticlesOrderFilter/ArticlesOrderFilter";
import { ArticlesSearchFilter } from "../ArticlesSearchFilter/ArticlesSearchFilter";
import { ArticlesSortFilter } from "../ArticlesSortFilter/ArticlesSortFilter";
import { ArticlesTypeFilter } from "../ArticlesTypeFilter/ArticlesTypeFilter";
import { ArticlesViewFilter } from "../ArticlesViewFilter/ArticlesViewFilter";

import s from "./ArticlesPageFilters.module.scss";

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
      t6y457p-
      <Card className={s.search}>
        <ArticlesSearchFilter />
      </Card>
      <ArticlesTypeFilter className={s.tabs} />
    </div>
  );
};

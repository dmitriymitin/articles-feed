import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { NuqsDecorator } from "@/shared/config/storybook/NuqsDecorator/NuqsDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import { ArticleView } from "@/entities/Article";
import {
  articlesDataTestEntities,
  articlesDataTestIds,
} from "@/entities/Article/mock";

import { ArticleInfiniteList } from "./ArticleInfiniteList";

export default {
  title: "pages/ArticlesPage/ArticleInfiniteList",
  component: ArticleInfiniteList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
  <ArticleInfiniteList />
);

export const SMALL = Template.bind({});
SMALL.args = {};
SMALL.decorators = [
  NuqsDecorator({
    searchParams: { view: ArticleView.SMALL },
  }),
  StoreDecorator({
    articlesPage: {
      entities: articlesDataTestEntities,
      ids: articlesDataTestIds,
    },
  }),
];

export const SMALL_LOADING = Template.bind({});
SMALL_LOADING.args = {};
SMALL_LOADING.decorators = [
  NuqsDecorator({
    searchParams: { view: ArticleView.SMALL },
  }),
  StoreDecorator({
    articlesPage: {
      entities: {},
      ids: [],
      isLoading: true,
    },
  }),
];

export const BIG = Template.bind({});
BIG.args = {};
BIG.decorators = [
  NuqsDecorator({
    searchParams: { view: ArticleView.BIG },
  }),
  StoreDecorator({
    articlesPage: {
      entities: articlesDataTestEntities,
      ids: articlesDataTestIds,
    },
  }),
];

export const BIG_LOADING = Template.bind({});
BIG_LOADING.args = {};
BIG_LOADING.decorators = [
  NuqsDecorator({
    searchParams: { view: ArticleView.BIG },
  }),
  StoreDecorator({
    articlesPage: {
      entities: {},
      ids: [],
      isLoading: true,
    },
  }),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  NuqsDecorator({}),
  StoreDecorator({
    articlesPage: {
      entities: {},
      ids: [],
      error: "error",
    },
  }),
];

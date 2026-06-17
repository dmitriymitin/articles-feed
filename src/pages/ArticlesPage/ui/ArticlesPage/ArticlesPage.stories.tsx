import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { NuqsDecorator } from "@/shared/config/storybook/NuqsDecorator/NuqsDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import {
  articlesDataTestEntities,
  articlesDataTestIds,
} from "@/entities/Article/testing";

import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/ArticlesPage/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  NuqsDecorator({}),
  StoreDecorator({
    articlesPage: {
      entities: articlesDataTestEntities,
      ids: articlesDataTestIds,
      _inited: true,
    }
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  NuqsDecorator({}),
  StoreDecorator({
    articlesPage: {
      entities: {},
      ids: [],
      isLoading: true,
      _inited: true,
    }
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
      isLoading: false,
      error: 'error',
      _inited: true,
    }
  }),
];

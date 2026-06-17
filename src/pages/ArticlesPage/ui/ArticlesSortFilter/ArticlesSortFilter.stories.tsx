import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { NuqsDecorator } from "@/shared/config/storybook/NuqsDecorator/NuqsDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import { ArticlesSortFilter } from './ArticlesSortFilter';

export default {
  title: 'pages/ArticlesPage/ArticlesSortFilter',
  component: ArticlesSortFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesSortFilter>;

const Template: ComponentStory<typeof ArticlesSortFilter> = (args) => (
  <ArticlesSortFilter />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  NuqsDecorator({}),
  StoreDecorator({})
];

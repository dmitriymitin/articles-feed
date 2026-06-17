import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { NuqsDecorator } from "@/shared/config/storybook/NuqsDecorator/NuqsDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import { ArticlesSearchFilter } from './ArticlesSearchFilter';

export default {
  title: 'pages/ArticlesPage/ArticlesSearchFilter',
  component: ArticlesSearchFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesSearchFilter>;

const Template: ComponentStory<typeof ArticlesSearchFilter> = (args) => (
  <ArticlesSearchFilter />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  NuqsDecorator({}),
  StoreDecorator({})
];

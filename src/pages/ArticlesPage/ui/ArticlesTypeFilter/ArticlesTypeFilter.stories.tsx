import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { NuqsDecorator } from "@/shared/config/storybook/NuqsDecorator/NuqsDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import { ArticlesTypeFilter } from './ArticlesTypeFilter';

export default {
  title: 'pages/ArticlesPage/ArticlesTypeFilter',
  component: ArticlesTypeFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesTypeFilter>;

const Template: ComponentStory<typeof ArticlesTypeFilter> = (args) => (
  <ArticlesTypeFilter />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  NuqsDecorator({}),
  StoreDecorator({})
];

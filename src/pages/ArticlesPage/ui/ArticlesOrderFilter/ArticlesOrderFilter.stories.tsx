import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { NuqsDecorator } from "@/shared/config/storybook/NuqsDecorator/NuqsDecorator";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import { ArticlesOrderFilter } from './ArticlesOrderFilter';

export default {
  title: 'pages/ArticlesPage/ArticlesOrderFilter',
  component: ArticlesOrderFilter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesOrderFilter>;

const Template: ComponentStory<typeof ArticlesOrderFilter> = (args) => (
  <ArticlesOrderFilter {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  NuqsDecorator({}),
  StoreDecorator({})
];

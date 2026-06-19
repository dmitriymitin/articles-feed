import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { commentsStoryMockFetch } from "@/entities/Comment/mock";

import ArticleCommentsList from "./ArticleCommentsList";

export default {
  title: 'widgets/ArticleCommentsList',
  component: ArticleCommentsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleCommentsList>;

const Template: ComponentStory<typeof ArticleCommentsList> = (args) => (
  <ArticleCommentsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [ commentsStoryMockFetch ],
};

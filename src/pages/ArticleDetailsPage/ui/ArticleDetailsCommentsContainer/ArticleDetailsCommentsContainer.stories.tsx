import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsCommentsContainer } from './ArticleDetailsCommentsContainer';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsCommentsContainer',
  component: ArticleDetailsCommentsContainer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsCommentsContainer>;

const Template: ComponentStory<typeof ArticleDetailsCommentsContainer> = (args) => (
  <ArticleDetailsCommentsContainer {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  articleId: '1',
};
Normal.decorators = [StoreDecorator({
  articleDetailsPage: {
    comments: {
      ids: ['1', '2'],
      entities: {
        '1': {
          id: '1',
          user: { id: '1', username: 'Test1' },
          text: 'Some comment 1'
        },
        '2': {
          id: '2',
          user: { id: '2', username: 'Test2' },
          text: 'Some comment 2'
        }
      }
    }
  }
})];

export const Empty = Template.bind({});
Empty.args = {
  articleId: '1',
};
Empty.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
  articleId: '1',
};
Loading.decorators = [StoreDecorator({
  articleDetailsPage: {
    comments: { isLoading: true, entities: {}, ids: [] },
  }
})];

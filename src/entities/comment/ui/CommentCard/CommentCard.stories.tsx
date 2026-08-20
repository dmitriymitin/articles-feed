import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { CommentCardSkeleton } from "./CommentCardSkeleton";

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);
const TemplateLoading: ComponentStory<typeof CommentCardSkeleton> = (args) => (
  <CommentCardSkeleton />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    }
};

export const Loading = TemplateLoading.bind({});
Loading.args = {};

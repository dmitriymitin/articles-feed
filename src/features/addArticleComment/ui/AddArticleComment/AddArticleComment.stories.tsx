import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import AddArticleComment from './AddArticleComment';

export default {
    title: 'features/AddArticleCommentForm',
    component: AddArticleComment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddArticleComment>;

const Template: ComponentStory<typeof AddArticleComment> = (args) => (
    <AddArticleComment {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({})
]

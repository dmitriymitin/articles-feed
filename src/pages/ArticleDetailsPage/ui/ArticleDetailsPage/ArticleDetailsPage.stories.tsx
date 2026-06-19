import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { recommendationsStoryMockFetch } from "@/entities/Article/mock";
import { articleTestData1 } from "@/entities/Article/testing";
import { commentsStoryMockFetch } from "@/entities/Comment/mock";

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
    title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
    // @ts-ignore
    <ArticleDetailsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
    StoreDecorator({
        articleDetails: {
            data: articleTestData1,
        },
    }),
];
Normal.parameters = {
    mockData: [ commentsStoryMockFetch, recommendationsStoryMockFetch ],
};

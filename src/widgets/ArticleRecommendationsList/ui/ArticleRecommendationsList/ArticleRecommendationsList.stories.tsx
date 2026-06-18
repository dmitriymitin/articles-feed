import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import {
  articleTestData1,
  articleTestData2,
  articleTestData3,
} from "@/entities/Article/testing";

import ArticleRecommendationsList, { articleRecommendationsListLimit } from "./ArticleRecommendationsList";

export default {
    title: 'widgets/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList  />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=${articleRecommendationsListLimit}`,
            method: 'GET',
            status: 200,
            response: [
                articleTestData1,
                articleTestData2,
                articleTestData3,
            ],
        },
    ],
};

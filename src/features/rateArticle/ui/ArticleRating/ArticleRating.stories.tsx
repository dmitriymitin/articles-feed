import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import { articlesStoryMockFetch } from "@/entities/Rating/mock";

import ArticleRating from "./ArticleRating";

export default {
  title: "features/ArticleRating",
  component: ArticleRating,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => (
  <ArticleRating {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  articleId: "1",
};
Normal.decorators = [
  StoreDecorator({
    user: {
      authData: { id: "1" },
    },
  }),
];
Normal.parameters = {
  mockData: [articlesStoryMockFetch({ rate: 4 })],
};

export const WithoutRate = Template.bind({});
WithoutRate.args = {
  articleId: "1",
};
WithoutRate.decorators = [
  StoreDecorator({
    user: {
      authData: { id: "1" },
    },
  }),
];
WithoutRate.parameters = {
  mockData: [articlesStoryMockFetch({ rate: 0 })],
};

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { articleTestData1 } from "../../testing";

import ArticleListItemSmall from "./ArticleListItemSmall";
import { ArticleListItemSmallSkeleton } from "./ArticleListItemSmallSkeleton";

export default {
  title: "entities/Article/ArticleListItemSmall",
  component: ArticleListItemSmall,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleListItemSmall>;

const Template: ComponentStory<typeof ArticleListItemSmall> = (args) => (
  <ArticleListItemSmall {...args} />
);

const TemplateSkeleton: ComponentStory<typeof ArticleListItemSmallSkeleton> = (
  args
) => <ArticleListItemSmallSkeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  article: articleTestData1,
};

export const Skeleton = TemplateSkeleton.bind({});
Skeleton.args = {};

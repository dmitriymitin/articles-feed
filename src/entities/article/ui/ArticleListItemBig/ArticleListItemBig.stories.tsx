import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { articleTestData1 } from "../../mock";

import ArticleListItemBig from "./ArticleListItemBig";
import { ArticleListItemBigSkeleton } from "./ArticleListItemBigSkeleton";

export default {
  title: "entities/Article/ArticleListItemBig",
  component: ArticleListItemBig,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleListItemBig>;

const Template: ComponentStory<typeof ArticleListItemBig> = (args) => (
  <ArticleListItemBig {...args} />
);

const TemplateSkeleton: ComponentStory<typeof ArticleListItemBigSkeleton> = (
  args
) => <ArticleListItemBigSkeleton {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  article: articleTestData1,
};

export const Skeleton = TemplateSkeleton.bind({});
Skeleton.args = {};

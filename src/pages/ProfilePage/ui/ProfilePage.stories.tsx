import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Theme } from "@/app/providers/ThemeProvider";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

// import { Country } from '@/entities/Country';
// import { Currency } from '@/entities/Currency';
import ProfilePage from "./ProfilePage";

// import { Theme } from '@/shared/const/theme';

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {},
  }),
];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {},
  }),
];

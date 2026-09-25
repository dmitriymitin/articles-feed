import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Theme } from "@/shared/const/theme";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import { Button } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: "clear",
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
  children: "Text",
  theme: "clearInverted",
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: "outline",
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
  children: "Text",
  theme: "outline",
  size: "l",
};

export const OutlineSizeXl = Template.bind({});
OutlineSizeXl.args = {
  children: "Text",
  theme: "outline",
  size: "xl",
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: "Text",
  theme: "outline",
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
  children: "Text",
  theme: "background",
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
  children: "Text",
  theme: "backgroundInverted",
};

export const Square = Template.bind({});
Square.args = {
  children: ">",
  theme: "backgroundInverted",
  square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
  children: ">",
  theme: "backgroundInverted",
  square: true,
  size: "l",
};

export const SquareSizeXl = Template.bind({});
SquareSizeXl.args = {
  children: ">",
  theme: "backgroundInverted",
  square: true,
  size: "xl",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: ">",
  theme: "outline",
  disabled: true,
};

import { addDecorator } from "@storybook/react";

import { RouterDecorator } from "@/shared/config/storybook/RouterDecorator/RouterDecorator";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import { SuspenseDecorator } from "@/shared/config/storybook/SuspenseDecorator/SuspenseDecorator";

import { Theme } from "@";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  themes: {
    default: "dark",
    list: [
      { name: "light", class: ["app", Theme.LIGHT], color: "#ffffff" },
      { name: "dark", class: ["app", Theme.DARK], color: "#000000" },
    ],
  },
};

addDecorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
addDecorator(SuspenseDecorator);

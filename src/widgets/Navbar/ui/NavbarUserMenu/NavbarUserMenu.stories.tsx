import React from 'react'

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import { NavbarUserMenu } from './NavbarUserMenu';


export default {
  title: 'widgets/Navbar/NavbarUserMenu',
  component: NavbarUserMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavbarUserMenu>;

const Template: ComponentStory<typeof NavbarUserMenu> = (args) => (
  <NavbarUserMenu {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  user: {
    authData: { id: '1' }
  }
})]

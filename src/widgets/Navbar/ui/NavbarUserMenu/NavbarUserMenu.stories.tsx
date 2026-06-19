import React from 'react'

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { NavbarUserMenu } from './NavbarUserMenu';


export default {
  title: 'widgets/Navbar/NavbarUserMeny',
  component: NavbarUserMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavbarUserMenu>;

const Template: ComponentStory<typeof NavbarUserMenu> = () => (
  <NavbarUserMenu />
);

export const Normal = Template.bind({});
Normal.args = {};

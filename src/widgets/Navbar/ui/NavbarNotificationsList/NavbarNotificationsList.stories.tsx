import React from 'react'

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { notificationsRequestMock } from "@/entities/Notification/mock";

import { NavbarNotificationsList } from "./NavbarNotificationsList";

export default {
  title: 'widgets/Navbar/NavbarNotificationsList',
  component: NavbarNotificationsList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavbarNotificationsList>;

const Template: ComponentStory<typeof NavbarNotificationsList> = (args) => (
  <NavbarNotificationsList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
  mockData: [
    notificationsRequestMock
  ],
};

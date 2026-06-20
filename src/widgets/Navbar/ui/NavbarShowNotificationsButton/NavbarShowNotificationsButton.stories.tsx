import React from 'react'

import { ComponentMeta,ComponentStory } from '@storybook/react';

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

import { notificationsRequestMock } from "@/entities/Notification/mock";

import { NavbarShowNotificationsButton } from './NavbarShowNotificationsButton';

export default {
    title: 'widgets/Navbar/NavbarShowNotificationsButton',
    component: NavbarShowNotificationsButton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavbarShowNotificationsButton>;

const Template: ComponentStory<typeof NavbarShowNotificationsButton> = () => (
    <NavbarShowNotificationsButton />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})]
Normal.parameters = {
    mockData: [
        notificationsRequestMock
    ],
};

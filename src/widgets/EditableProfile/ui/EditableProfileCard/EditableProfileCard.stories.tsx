import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import avatar from '@/shared/assets/tests/storybook.jpg'

import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";

import { ValidateProfileError } from "../../model/consts/editableProfileConsts";

import { EditableProfileCard } from "./EditableProfileCard";

export default {
  title: 'widgets/EditableProfileCard',
  component: EditableProfileCard,
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = () => (
  // @ts-ignore
  <EditableProfileCard />
);

export const Base = Template.bind({});
Base.args = {};
Base.decorators = [StoreDecorator({
  profile: {
    readonly: true,
    form: {
      avatar,
      username: 'admin asd as da sd asd as',
      age: 22,
      country: Country.Armenia,
      lastname: 'dm asd as das das das das',
      first: 'asd',
      city: 'asf',
      currency: Currency.USD,
    },
    data: {
      avatar,
      username: 'admin',
      age: 22,
      country: Country.Armenia,
      lastname: 'dm',
      first: 'asd',
      city: 'asf',
      currency: Currency.USD,
    }
  }
})]

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  profile: {
    readonly: true,
    isLoading: true,
  }
})]

export const ServerError = Template.bind({});
ServerError.args = {};
ServerError.decorators = [StoreDecorator({
  profile: {
    readonly: true,
    error: 'internal server error',
  }
})]

export const ValidateErrors = Template.bind({});
ValidateErrors.args = {};
ValidateErrors.decorators = [StoreDecorator({
  profile: {
    readonly: true,
    validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE]
  }
})]

import { Story } from "@storybook/react";

import {
  ReducersList,
  StateSchema,
  StoreProvider,
} from "@/app/providers/StoreProvider";

import { loginReducer } from "@/features/authByUsername/testing";
import { profileReducer } from "@/features/editingProfile/testing";

import { articleDetailsReducer } from '@/entities/Article/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
        <StoryComponent />
      </StoreProvider>
    );

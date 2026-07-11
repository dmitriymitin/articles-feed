import { Story } from "@storybook/react";

import {
  ReducersList,
  StateSchema,
  StoreProvider,
} from "@/app/providers/StoreProvider";

import { articleDetailsReducer } from "@/entities/Article/mock";

import { loginReducer } from "@/features/authByUsername/testing";
import { profileReducer } from "@/widgets/EditableProfile/testing";

import { articleDetailsPageReducer } from "@/pages/ArticleDetailsPage/testing";
import { articlesPageReducer } from "@/pages/ArticlesPage/testing";

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsPage: articleDetailsPageReducer,
  articlesPage: articlesPageReducer,
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
        <StoryComponent />
      </StoreProvider>
    );

import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import { CombinedState } from "redux";

import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";

import { LoginSchema } from "@/features/AuthByUsername";
// import { ArticleDetailsSchema } from "@/entities/Article";
// import { ArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";
// import { AddCommentFormSchema } from "@/features/addCommentForm";
// import { ArticlesPageSchema } from "@/pages/ArticlesPage";
// import { UISchema } from "@/features/UI";
// import { rtkApi } from "@/shared/api/rtkApi";
import { ProfileSchema } from "@/features/editableProfileCard";

import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  // ui: UISchema;
  // [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  /**
   * Асинхронные редюсеры
   * при добавлении асинхронного редюсера не забыть положить в
   * {@link StoreDecorator} defaultAsyncReducers
   */
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  // articleDetails?: ArticleDetailsSchema;
  // addCommentForm?: AddCommentFormSchema;
  // articlesPage?: ArticlesPageSchema;
  // articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager
  extends Omit<EnhancedStore<StateSchema>, "getState"> {
  reducerManager: ReducerManager;
  getState: () => Required<StateSchema>;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}

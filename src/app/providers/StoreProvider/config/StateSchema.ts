import { AxiosInstance } from "axios";
import { NavigateOptions, To } from "react-router-dom";
import { CombinedState } from "redux";

import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";

import { ArticleDetailsSchema } from "@/entities/Article";
import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";

// import { ArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";
import { LoginSchema } from "@/features/authByUsername";
// import { UISchema } from "@/features/UI";
// import { rtkApi } from "@/shared/api/rtkApi";
import { ProfileSchema } from "@/features/editingProfile";

import { ArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage";
import { ArticlesPageSchema } from "@/pages/ArticlesPage";

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
  articleDetails?: ArticleDetailsSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
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

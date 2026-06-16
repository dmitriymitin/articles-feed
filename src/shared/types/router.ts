import { RouteProps } from 'react-router-dom';

import { UserRole } from '@/entities/User';

import { articlesPageSearchParams } from "../const/router";

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export type ArticlesPageSearchParamsKey =
  keyof typeof articlesPageSearchParams

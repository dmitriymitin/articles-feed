import { lazy } from "react";

import LoginForm from './LoginForm';

export const LoginFormAsync = lazy<typeof LoginForm>(
    () => import('./LoginForm'),
);

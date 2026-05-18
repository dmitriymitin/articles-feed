import { memo } from "react";

import { ReducersList } from "@/app/providers/StoreProvider";

import { Text } from "@/shared/ui/Text";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAppStore } from "@/shared/lib/hooks/useAppStore/useAppStore";

import { getLoginField } from "../../model/selectors/getLoginField/getLoginField";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginReducer } from "../../model/slice/loginSlice";

import { LoginFormError } from "../LoginFormError/LoginFormError";
import { LoginFormInput } from "../LoginFormInput/LoginFormInput";
import { LoginFormSubmitBtn } from "../LoginFormSubmitBtn/LoginFormSubmitBtn";

import s from "./LoginForm.module.scss";

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export interface LoginFormProps {}

const LoginForm = (props: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const store = useAppStore();

  const login = async () => {
    const state = store.getState();
    const username = getLoginField("username")(state);
    const password = getLoginField("password")(state);

    dispatch(loginByUsername({ username, password }));
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={s.LoginForm}>
        <Text title="Форма авторизации" />
        <LoginFormInput placeholder="Введите username" field="username" autofocus className={s.input} />
        <LoginFormInput placeholder="Введите пароль" field="password" className={s.input} />
        <LoginFormError />
        <LoginFormSubmitBtn onClick={login} className={s.loginBtn} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);

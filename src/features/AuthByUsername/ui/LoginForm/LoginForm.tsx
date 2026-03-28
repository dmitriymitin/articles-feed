import { memo } from "react";

import { ReducersList } from "@/app/providers/StoreProvider";

import { Text } from "@/shared/ui/Text";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAppStore } from "@/shared/lib/hooks/useAppStore/useAppStore";

import { getLoginInputField } from "../../model/selectors/getLoginInputField/getLoginInputField";
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

    const username = getLoginInputField("username")(state);
    const password = getLoginInputField("password")(state);

    dispatch(loginByUsername({ username, password }));
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={s.LoginForm}>
        <Text title="Форма авторизации" />
        <LoginFormInput
          className={s.input}
          placeholder="Введите username"
          autofocus
          field="username"
        />
        <LoginFormInput
          className={s.input}
          placeholder="Введите пароль"
          field="password"
        />
        <LoginFormError />
        <LoginFormSubmitBtn onClick={login} className={s.loginBtn} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(LoginForm);

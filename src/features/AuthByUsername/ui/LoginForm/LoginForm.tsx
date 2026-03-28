import { memo } from "react";

import { Text } from "@/shared/ui/Text";

import { getLoginInputField } from "../../model/selectors/getLoginInputField/getLoginInputField";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

import { LoginFormError } from "../LoginFormError/LoginFormError";
import { LoginFormInput } from "../LoginFormInput/LoginFormInput";
import { LoginFormSubmitBtn } from "../LoginFormSubmitBtn/LoginFormSubmitBtn";

import s from "./LoginForm.module.scss";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAppStore } from "@/shared/lib/hooks/useAppStore/useAppStore";

export interface LoginFormProps {}

const _LoginForm = (props: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const store = useAppStore();

  const login = async () => {
    const state = store.getState();

    const username = getLoginInputField("username")(state);
    const password = getLoginInputField("password")(state);

    dispatch(loginByUsername({ username, password }));
  };

  return (
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
  );
};

export default memo(_LoginForm);

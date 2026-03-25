import { memo } from "react";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text } from "shared/ui/Text";
import { useAppStore } from "shared/lib/hooks/useAppStore/useAppStore";

import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";

import { LoginFormInput } from "../LoginFormInput/LoginFormInput";
import { LoginFormSubmitBtn } from "../LoginFormSubmitBtn/LoginFormSubmitBtn";
import { LoginFormError } from "../LoginFormError/LoginFormError";

import s from "./LoginForm.module.scss";

interface LoginFormProps {}

const _LoginForm = (props: LoginFormProps) => {
  const dispatch = useAppDispatch();
  const store = useAppStore();

  const login = async () => {
    const state = store.getState();
    const { username, password } = getLoginState(state);

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

export const LoginForm = memo(_LoginForm);

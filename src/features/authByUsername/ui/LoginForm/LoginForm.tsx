import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { ReducersList } from "@/app/providers/StoreProvider";

import { Text } from "@/shared/ui/Text";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAppStore } from "@/shared/lib/hooks/useAppStore/useAppStore";
import { getRouteAbout } from "@/shared/const/router";

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
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

export interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { onLogin } = props
  const dispatch = useAppDispatch();
  const store = useAppStore();
  const navigate = useNavigate();

  const login = async () => {
    const username = getLoginField("username")(store.getState());
    const password = getLoginField("password")(store.getState());

    await dispatch(loginByUsername({ username, password }));

    const error = getLoginError(store.getState());
    if (!error) {
      navigate(getRouteAbout())
      onLogin()
    }
  };

  return (
    <div className={s.LoginForm}>
      <Text title="Форма авторизации" />
      <LoginFormInput placeholder="Введите username" field="username" autofocus className={s.input} />
      <LoginFormInput placeholder="Введите пароль" field="password" className={s.input} />
      <LoginFormError />
      <LoginFormSubmitBtn onClick={login} className={s.loginBtn} />
    </div>
  );
};

const MemoLoginForm = memo(LoginForm);

export default (props: LoginFormProps) => (
  <DynamicModuleLoader reducers={initialReducers}>
    <MemoLoginForm {...props} />
  </DynamicModuleLoader>
)

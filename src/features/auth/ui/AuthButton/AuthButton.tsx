import React from "react";
import { useSelector } from "react-redux";

import { Button } from "@/shared/ui/Button";

import { getUserAuthData } from "@/entities/User";

import { useLogout } from "../../model/hooks/useLogout";

interface AuthButtonProps {
  className?: string;
  onLogin?: () => void;
}

export const AuthButton = (props: AuthButtonProps) => {
  const { className, onLogin } = props;
  const authData = useSelector(getUserAuthData);

  const { logout } = useLogout();

  return (
    <>
      {authData ? (
        <Button className={className} theme="clearInverted" onClick={logout}>
          Выйти
        </Button>
      ) : (
        <Button className={className} theme="clearInverted" onClick={onLogin}>
          Войти
        </Button>
      )}
    </>
  );
};

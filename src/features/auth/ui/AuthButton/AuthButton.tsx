import React from "react";
import { useSelector } from "react-redux";

import { Button } from "@/shared/ui/Button";
import { Trans } from "@/shared/ui/Translate";

import { getUserAuthData } from "@/entities/User";

import { useLogout } from '../..';

interface AuthButtonProps {
  className?: string;
  onLogin?: () => void;
}

export const AuthButton = (props: AuthButtonProps) => {
  const { className, onLogin } = props;
  const authData = useSelector(getUserAuthData);

  const { logout } = useLogout()

  return (
    <>
      {authData ? (
        <Button className={className} theme="clearInverted" onClick={logout}>
          <Trans>Выйти</Trans>
        </Button>
      ) : (
        <Button className={className} theme="clearInverted" onClick={onLogin}>
          <Trans>Войти</Trans>
        </Button>
      )}
    </>
  );
};

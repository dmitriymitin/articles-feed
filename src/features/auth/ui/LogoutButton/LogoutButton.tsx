import React from 'react';

import { Button } from "@/shared/ui/Button";
import { Trans } from "@/shared/ui/Translate";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { userActions } from "@/entities/User";

interface LogoutButtonProps {
  className?: string;
}

export const LogoutButton = (props: LogoutButtonProps) => {
  const { className } = props;

  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userActions.logout());
  };

  return (
    <Button className={className} theme="clearInverted" onClick={logout}>
      <Trans>Выйти</Trans>
    </Button>
  );
};

import React from 'react';

import { Button } from "@/shared/ui/Button";
import { Trans } from "@/shared/ui/Translate";

interface LoginButtonProps {
  className?: string;
  onLogin?: () => void;
}

export const LoginButton = (props: LoginButtonProps) => {
  const { className, onLogin } = props

  return (
    <Button className={className} theme="clearInverted" onClick={onLogin}>
      <Trans>Войти</Trans>
    </Button>
  );
};

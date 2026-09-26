import React from 'react';
import { useSelector } from 'react-redux';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

import { ToggleFeatures } from '@/shared/lib/features';

import { getUserAuthData } from '@/entities/user';

interface AuthButtonProps {
  className?: string;
  onLogin?: () => void;
}

export const AuthButton = (props: AuthButtonProps) => {
  const { className, onLogin } = props;
  const authData = useSelector(getUserAuthData);

  if (authData) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button variant="clear" className={className} onClick={onLogin}>
          Войти
        </Button>
      }
      off={
        <ButtonDeprecated
          className={className}
          theme="clearInverted"
          onClick={onLogin}
        >
          Войти
        </ButtonDeprecated>
      }
    />
  );
};

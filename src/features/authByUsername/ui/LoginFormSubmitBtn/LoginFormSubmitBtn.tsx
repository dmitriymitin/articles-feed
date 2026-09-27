import { useSelector } from 'react-redux';

import {
  Button as ButtonDeprecated,
  ButtonProps as ButtonDeprecatedProps,
} from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';

import { ToggleFeatures } from '../../../../shared/lib/features';

import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';

interface LoginFormSubmitBtnProps
  extends Pick<ButtonDeprecatedProps, 'className' | 'onClick'> {}

export const LoginFormSubmitBtn = (props: LoginFormSubmitBtnProps) => {
  const { className, onClick } = props;

  const isLoading = useSelector(getLoginLoading);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button className={className} onClick={onClick} disabled={isLoading}>
          Войти
        </Button>
      }
      off={
        <ButtonDeprecated
          theme="outline"
          disabled={isLoading}
          onClick={onClick}
          className={className}
        >
          Войти
        </ButtonDeprecated>
      }
    />
  );
};

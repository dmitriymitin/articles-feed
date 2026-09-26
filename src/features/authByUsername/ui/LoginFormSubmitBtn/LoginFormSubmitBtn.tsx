import { useSelector } from 'react-redux';

import {
  Button as ButtonDeprecated,
  ButtonProps as ButtonDeprecatedProps,
} from '@/shared/ui/deprecated/Button';

import { getLoginLoading } from '../../model/selectors/getLoginLoading/getLoginLoading';

interface LoginFormSubmitBtnProps
  extends Pick<ButtonDeprecatedProps, 'className' | 'onClick'> {}

export const LoginFormSubmitBtn = (props: LoginFormSubmitBtnProps) => {
  const { className, onClick } = props;

  const isLoading = useSelector(getLoginLoading);

  return (
    <ButtonDeprecated
      theme="outline"
      disabled={isLoading}
      onClick={onClick}
      className={className}
    >
      Войти
    </ButtonDeprecated>
  );
};

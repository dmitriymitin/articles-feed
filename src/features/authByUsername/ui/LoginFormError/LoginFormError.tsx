import { useSelector } from 'react-redux';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

interface LoginFormErrorProps {}

export const LoginFormError = (props: LoginFormErrorProps) => {
  const error = useSelector(getLoginError);

  if (!error) {
    return null;
  }

  return <TextDeprecated text={error} theme="error" />;
};

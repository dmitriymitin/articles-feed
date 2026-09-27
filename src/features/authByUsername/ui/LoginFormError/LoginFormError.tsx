import { useSelector } from 'react-redux';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';

import { ToggleFeatures } from '@/shared/lib/features';

import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';

interface LoginFormErrorProps {}

export const LoginFormError = (props: LoginFormErrorProps) => {
  const error = useSelector(getLoginError);

  if (!error) {
    return null;
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Text text={error} variant="error" />}
      off={<TextDeprecated title="Форма авторизации" theme="error" />}
    />
  );
};

import { useSelector } from "react-redux";

import { Text } from "@/shared/ui/Text";

import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";

interface LoginFormErrorProps {}

export const LoginFormError = (props: LoginFormErrorProps) => {
  const error = useSelector(getLoginError);

  if (!error) {
    return null;
  }

  return <Text text={error} theme="error" />;
};

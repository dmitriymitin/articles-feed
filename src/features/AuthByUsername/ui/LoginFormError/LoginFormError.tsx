import { useSelector } from "react-redux";
import { Text } from "@/shared/ui/Text";
import { getLoginStateError } from "../../model/selectors/getLoginStateError/getLoginStateError";

interface LoginFormErrorProps {}

export const LoginFormError = (props: LoginFormErrorProps) => {
  const error = useSelector(getLoginStateError);

  if (!error) {
    return null;
  }

  return <Text text={error} theme="error" />;
};

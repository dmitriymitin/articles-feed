import { useSelector } from "react-redux";
import { Button, ButtonProps } from "@/shared/ui/Button";
import { Trans } from "@/shared/ui/Translate";
import { getLoginStateLoading } from "../../model/selectors/getLoginStateLoading/getLoginStateLoading";

interface LoginFormSubmitBtnProps
  extends Pick<ButtonProps, "className" | "onClick"> {}

export const LoginFormSubmitBtn = (props: LoginFormSubmitBtnProps) => {
  const { className, onClick } = props;

  const isLoading = useSelector(getLoginStateLoading);

  return (
    <Button
      theme="outline"
      disabled={isLoading}
      onClick={onClick}
      className={className}
    >
      <Trans>Войти</Trans>
    </Button>
  );
};

import { useSelector } from "react-redux";

import { Input, InputProps } from "@/shared/ui/Input";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { getLoginField } from "../../model/selectors/getLoginField/getLoginField";
import { loginActions } from "../../model/slice/loginSlice";
import { LoginSchema } from "../../model/types/LoginSchema";

interface LoginFormInputProps
  extends Pick<InputProps, "placeholder" | "autofocus" | 'className'> {
  field: keyof Pick<LoginSchema, "password" | "username">;
}

export const LoginFormInput = (props: LoginFormInputProps) => {
  const { field, className, placeholder, autofocus } = props;

  const dispatch = useAppDispatch();

  const fieldValue = useSelector(getLoginField(field));

  const onChangeField = (value: string) => {
    dispatch(loginActions.setField({ value, field }));
  };

  return (
    <Input
      type="text"
      className={className}
      onChange={onChangeField}
      autofocus={autofocus}
      value={fieldValue}
      placeholder={placeholder}
    />
  );
};

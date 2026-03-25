import { useSelector } from "react-redux";
import { Input, InputProps } from "@/shared/ui/Input";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { LoginSchemaInputFields } from "../../model/types/LoginSchema";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginStateInputField } from "../../model/selectors/getLoginStateInputField/getLoginStateInputField";

interface LoginFormInputProps
  extends Pick<InputProps, "placeholder" | "autofocus"> {
  field: keyof LoginSchemaInputFields;
  className?: string;
}

export const LoginFormInput = (props: LoginFormInputProps) => {
  const { field, className, placeholder, autofocus } = props;

  const dispatch = useAppDispatch();
  const { setInputField } = loginActions;

  const fieldValue = useSelector(getLoginStateInputField(field));

  const onChangeField = (value: string) => {
    dispatch(setInputField({ value, field }));
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

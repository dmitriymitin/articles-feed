import { useSelector } from "react-redux";

import { Input, InputProps } from "@/shared/ui/Input";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { getProfileFormField } from "../../model/selectors/getProfileFormField/getProfileFormField";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { profileActions } from "../../model/slice/profileSlice";
import {
  ProfileSchemaForm,
} from "../../model/types/editableProfileCardSchema";

interface EditableProfileInputProps
  extends Pick<InputProps, "placeholder" | 'className' | 'type'> {
  field: keyof Pick<ProfileSchemaForm, 'age' | 'first' | 'lastname' | 'city' | 'username' | "avatar">;
}

export const EditableProfileInput = (
  props: EditableProfileInputProps
) => {
  const { field, className, type = 'text', placeholder } = props;

  const dispatch = useAppDispatch();

  const readonly = useSelector(getProfileReadonly)
  const fieldValue = useSelector(getProfileFormField(field));

  const onChangeField = (value: string) => {
    dispatch(
      profileActions.setField({
        field,
        value: type === "number" ? Number(value) : value,
      })
    );
  };

  return (
    <Input
      ns='profile'
      type={type}
      className={className}
      onChange={onChangeField}
      value={fieldValue}
      placeholder={placeholder}
      readonly={readonly}
    />
  );
};

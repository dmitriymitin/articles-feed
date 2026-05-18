import { useSelector } from "react-redux";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { getProfileFormField } from "../../model/selectors/getProfileFormField/getProfileFormField";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { profileAction } from "../../model/slice/profileSlice";

import { CountrySelect, CountrySelectProps } from "@/entities/Country";

interface EditableProfileCountrySelectProps {
  className?: string;
}

export const EditableProfileCountrySelect = (props: EditableProfileCountrySelectProps) => {
  const { className } = props;
  const dispatch = useAppDispatch()

  const country = useSelector(getProfileFormField('country'))
  const readonly = useSelector(getProfileReadonly)

  const onChange: CountrySelectProps['onChange'] = (value) => {
    dispatch(profileAction.setField({ field: 'country', value }))
  }

  return (
    <CountrySelect
      className={className}
      label='Укажите страну'
      value={country}
      onChange={onChange}
      readonly={readonly}
    />
  );
};

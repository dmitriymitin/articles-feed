import { useSelector } from "react-redux";

import { ListBox } from "@/shared/ui/Popups";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { Country, countryListOptions  } from "@/entities/Country";

import { getProfileFormField } from "../../model/selectors/getProfileFormField/getProfileFormField";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { profileActions } from "../../model/slice/profileSlice";

interface EditableProfileCountrySelectProps {
  className?: string;
}

export const EditableProfileCountrySelect = (props: EditableProfileCountrySelectProps) => {
  const { className } = props;
  const dispatch = useAppDispatch()

  const country = useSelector(getProfileFormField('country'))
  const readonly = useSelector(getProfileReadonly)

  return (
    <ListBox<Country>
      value={country}
      options={countryListOptions}
      readonly={readonly}
      className={className}
      defaultValue='Укажите страну'
      label='Укажите страну'
      direction='top right'
      onChange={(country) => {
        dispatch(profileActions.setField({ field: 'country', value: country }))
      }}
    />
  );
};

// <Select
//   label={label}
//   readonly={readonly}
//   options={options}
//   value={value}
//   onChange={(country) => {
//         dispatch(profileActions.setField({ field: 'country', value: country }))
//       }}
//   className={className}
// />

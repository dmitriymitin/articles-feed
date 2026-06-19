import  { useSelector } from "react-redux";

import { ListBox } from "@/shared/ui/Popups";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import {
  Currency,
  currencyListOptions,
} from "@/entities/Currency";

import { getProfileFormField } from "../../model/selectors/getProfileFormField/getProfileFormField";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { profileActions } from "../../model/slice/profileSlice";

interface EditableProfileCurrencySelectProps {
  className?: string;
}


export const EditableProfileCurrencySelect = (props: EditableProfileCurrencySelectProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const currency = useSelector(getProfileFormField("currency"));
  const readonly = useSelector(getProfileReadonly);

  return (
    <ListBox<Currency>
      value={currency}
      options={currencyListOptions}
      readonly={readonly}
      className={className}
      defaultValue='Укажите валюту'
      label='Укажите валюту'
      direction='top right'
      onChange={(currency) => {
        dispatch(profileActions.setField({ field: 'currency', value: currency }))
      }}
    />
  );
};

// <Select
//   className={className}
//   label="Укажите валюту"
//   value={currency}
//   onChange={(currency) => {
//         dispatch(profileActions.setField({ field: 'currency', value: currency }))
//       }}
//   readonly={readonly}
// />

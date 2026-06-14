import  { useSelector } from "react-redux";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import {
  CurrencySelect,
  CurrencySelectProps,
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

  const onChange: CurrencySelectProps["onChange"] = (value) => {
    dispatch(profileActions.setField({ field: "currency", value }));
  };

  return (
    <CurrencySelect
      className={className}
      label="Укажите валюту"
      value={currency}
      onChange={onChange}
      readonly={readonly}
    />
  );
};

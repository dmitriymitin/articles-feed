import  { useSelector } from "react-redux";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { getProfileFormField } from "../../model/selectors/getProfileFormField/getProfileFormField";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { profileAction } from "../../model/slice/profileSlice";

import {
  CurrencySelect,
  CurrencySelectProps,
} from "@/entities/Currency";

 export const EditableProfileCurrencySelect = () => {
   const dispatch = useAppDispatch()

   const currency = useSelector(getProfileFormField('currency'))
   const readonly = useSelector(getProfileReadonly)

   const onChange: CurrencySelectProps['onChange'] = (value) => {
     dispatch(profileAction.setField({ field: 'currency', value }))
   }

   return (
     <CurrencySelect
       label='Укажите валюту'
       value={currency}
       onChange={onChange}
       readonly={readonly}
     />
   );
 };

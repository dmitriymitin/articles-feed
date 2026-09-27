import { useSelector } from 'react-redux';

import {
  ListBox as ListBoxDeprecated,
  ListBoxProps,
} from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Currency, currencyListOptions } from '@/entities/currency';

import { getProfileFormField } from '../../model/selectors/getProfileFormField/getProfileFormField';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCurrencySelectProps {
  className?: string;
}

export const EditableProfileCurrencySelect = (
  props: EditableProfileCurrencySelectProps,
) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const currency = useSelector(getProfileFormField('currency'));
  const readonly = useSelector(getProfileReadonly);

  const generalProps: ListBoxProps<Currency> = {
    value: currency,
    readonly,
    className,
    defaultValue: 'Укажите валюту',
    label: 'Укажите валюту',
    direction: 'top right',
    onChange: (currency) => {
      dispatch(profileActions.setField({ field: 'currency', value: currency }));
    },
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox<Currency> {...generalProps} items={currencyListOptions} />}
      off={
        <ListBoxDeprecated<Currency>
          {...generalProps}
          options={currencyListOptions}
        />
      }
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

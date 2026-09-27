import { useSelector } from 'react-redux';

import {
  ListBox as ListBoxDeprecated,
  ListBoxProps,
} from '@/shared/ui/deprecated/Popups';
import { ListBox } from '@/shared/ui/redesigned/Popups';

import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Country, countryListOptions } from '@/entities/country';

import { getProfileFormField } from '../../model/selectors/getProfileFormField/getProfileFormField';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCountrySelectProps {
  className?: string;
}

export const EditableProfileCountrySelect = (
  props: EditableProfileCountrySelectProps,
) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const country = useSelector(getProfileFormField('country'));
  const readonly = useSelector(getProfileReadonly);

  const generalProps: ListBoxProps<Country> = {
    value: country,
    readonly,
    className,
    defaultValue: 'Укажите страну',
    label: 'Укажите страну',
    direction: 'top right',
    onChange: (country) => {
      dispatch(profileActions.setField({ field: 'country', value: country }));
    },
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<ListBox<Country> {...generalProps} items={countryListOptions} />}
      off={
        <ListBoxDeprecated<Country>
          {...generalProps}
          options={countryListOptions}
        />
      }
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

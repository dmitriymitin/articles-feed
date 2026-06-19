import { Select, SelectProps as BaseSelectProps } from "@/shared/ui/Select";

import { Country } from "../../model/types/country";

type SelectProps = BaseSelectProps<Country>;

const options: SelectProps['options'] = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
];

export interface CountrySelectProps extends Pick<SelectProps, 'value' | 'className' | 'onChange' | 'readonly' | 'label'> {

}

export const CountrySelect = (props: CountrySelectProps) => {
  const { value, onChange, className, readonly, label } = props;

  return (
    <Select
      label={label}
      readonly={readonly}
      options={options}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
};

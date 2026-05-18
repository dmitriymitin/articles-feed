import { Select, SelectProps as BaseSelectProps } from "@/shared/ui/Select";

import { Currency } from "../../model/types/currency";

type SelectProps = BaseSelectProps<Currency>

const options: SelectProps['options'] = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export interface CurrencySelectProps extends Pick<SelectProps, 'value' | 'className' | 'onChange' | 'readonly' | 'label'> {

}

export const CurrencySelect = (props: CurrencySelectProps) => {
  const { value, onChange, className, readonly, label } = props;

  return (
    <Select
      label={label}
      readonly={readonly}
      className={className}
      onChange={onChange}
      value={value}
      options={options}
    />
  );
};

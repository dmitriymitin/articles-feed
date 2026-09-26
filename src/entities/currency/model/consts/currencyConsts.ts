import { ListBoxItem as ListBoxItemDeprecated } from '@/shared/ui/deprecated/Popups';

export enum Currency {
  'RUB' = 'RUB',
  'EUR' = 'EUR',
  'USD' = 'USD',
}
export const currencyListOptions: ListBoxItemDeprecated<Currency>[] = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

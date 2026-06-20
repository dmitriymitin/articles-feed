import { ListBoxItem } from "@/shared/ui/Popups/components/ListBox/ListBox";

export enum Currency {
  'RUB' = 'RUB',
  'EUR' = 'EUR',
  'USD' = 'USD',
}
export const currencyListOptions: ListBoxItem<Currency>[] = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

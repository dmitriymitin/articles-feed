import { ListBoxItem } from "@/shared/ui/Popups/components/ListBox/ListBox";

import { Currency } from '../../model/types/currency';

export const currencyListOptions: ListBoxItem<Currency>[] = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

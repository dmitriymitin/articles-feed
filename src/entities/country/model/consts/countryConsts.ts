import { ListBoxItem } from "@/shared/ui/Popups/components/ListBox/ListBox";

export enum Country {
  Russia = 'Russia',
  Belarus = 'Belarus',
  Kazakhstan = 'Kazahstan',
  Armenia = 'Armenia',
}

export const countryListOptions: ListBoxItem<Country>[] = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
]

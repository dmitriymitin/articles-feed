## Сущность страны

Описание:
содержит enum стран и список опций для выбора страны.

#### Public API

- Consts

`Country` - список доступных стран

`countryListOptions` - опции стран для select-компонентов

- Cross imports

`@x/Profile` - экспорт `Country` для сущности `Profile`

#### Пример

```ts
import { Country, countryListOptions } from "@/entities/Country";
```

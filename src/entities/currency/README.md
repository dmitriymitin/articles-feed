## Сущность валюты

Описание:
содержит enum валют и список опций для выбора валюты.

#### Public API

- Consts

`Currency` - список доступных валют

`currencyListOptions` - опции валют для select-компонентов

- Cross imports

`@x/Profile` - экспорт `Currency` для сущности `Profile`

#### Пример

```ts
import { Currency, currencyListOptions } from "@/entities/Currency";
```

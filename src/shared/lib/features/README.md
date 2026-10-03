# Фича-флаги

Модуль содержит публичный API для работы с фича-флагами: получение и установка
значений, выбор реализации и обновление флагов пользователя.

Все функции и компоненты следует импортировать из публичного API модуля:

```ts
import {
  ToggleFeatures,
  getFeatureFlag,
  toggleFeatures,
} from '@/shared/lib/features';
```

## Навигация по репозиторию

- [`FeatureFlags`](../../types/featureFlags.ts) — тип доступных фича-флагов;
- [`getFeatureFlag` и `setFeatureFlags`](./lib/setGetFeatures.ts) — чтение и
  установка значений;
- [`toggleFeatures`](./lib/toggleFeatures.ts) — переключение обычного
  TypeScript-кода;
- [`ToggleFeatures`](./components/ToggleFeatures/ToggleFeatures.tsx) —
  переключение JSX;
- [`updateFeatureFlag`](./services/updateFeatureFlags.ts) — обновление флагов
  пользователя;
- [скрипт удаления фича-флага](../../../../scripts/remove-feature.ts).

> Внешние ссылки на общую документацию и FE-/BE-репозитории нужно добавить,
> когда будут известны их URL.

## Добавление фича-флага

Перед использованием добавьте новый флаг в интерфейс
[`FeatureFlags`](../../types/featureFlags.ts). После этого ключ станет доступен
во всём приложении и будет проверяться TypeScript.

Название должно описывать булево состояние и начинаться с `is`, например:

```ts
export interface FeatureFlags {
  isCheckoutEnabled?: boolean;
}
```

Локальную переменную со значением флага называйте так же, как сам флаг:

```ts
const { value: isCheckoutEnabled } = getFeatureFlag('isCheckoutEnabled');
```

## Переключение функциональности

Для функциональности, которую впоследствии нужно удалить вместе с флагом,
используйте один из двух API:

- `ToggleFeatures` — в JSX;
- `toggleFeatures` — в обычном TypeScript-коде.

Скрипт удаления умеет автоматически обрабатывать именно эти конструкции.

### Компонент `ToggleFeatures`

```tsx
import { ToggleFeatures } from '@/shared/lib/features';

export const Component = () => (
  <ToggleFeatures
    feature="isCheckoutEnabled"
    on={<ComponentNew />}
    off={<ComponentDeprecated />}
  />
);
```

В `on` передаётся функциональность для включённого флага, в `off` — для
выключенного.

### Функция `toggleFeatures`

```ts
import { toggleFeatures } from '@/shared/lib/features';

const result = toggleFeatures({
  name: 'isCheckoutEnabled',
  on: () => funcNew(),
  off: () => funcDeprecated(),
});
```

Имя флага необходимо передавать строковым литералом. Текущая версия скрипта
удаления не распознаёт имя, переданное через переменную или константу.

## Получение значения фича-флага

Используйте `getFeatureFlag`, только если нужное поведение нельзя выразить через
`ToggleFeatures` или `toggleFeatures`:

```ts
import { getFeatureFlag } from '@/shared/lib/features';

const { value: isCheckoutEnabled } = getFeatureFlag('isCheckoutEnabled');
```

`getFeatureFlag` предназначена для чтения значения, а не для переключения
удаляемой функциональности.

> **Важно:** скрипт удаления не обрабатывает вызовы `getFeatureFlag`. Зависимый
> от них код придётся найти и удалить вручную.

## Значения по умолчанию

Значения задаются в `defaultFeatures` внутри
[`setGetFeatures.ts`](./lib/setGetFeatures.ts). Сейчас значение
`isAppRedesigned` восстанавливается из `localStorage`; остальные необязательные
флаги до получения данных имеют значение `undefined` и обрабатываются как
выключенные.

Флаги устанавливаются при инициализации пользователя и не являются
реактивными. `updateFeatureFlag` сохраняет новые значения, обновляет локальное
состояние флагов и перезагружает страницу.

## Удаление фича-флага

Скрипт принимает два аргумента:

1. имя удаляемого фича-флага;
2. состояние, которое нужно оставить: `on` или `off`.

```bash
npm run remove-feature -- isCheckoutEnabled on
```

- `on` — оставить ветку `on` и удалить ветку `off`;
- `off` — оставить ветку `off` и удалить ветку `on`.

После запуска:

1. проверьте сформированный diff;
2. найдите оставшиеся обращения через `getFeatureFlag`;
3. вручную удалите флаг из `FeatureFlags`;
4. запустите проверку типов и тесты затронутой функциональности.

### Пример удаления функции

До удаления:

```ts
const result = toggleFeatures({
  name: 'isCheckoutEnabled',
  on: () => funcNew(),
  off: () => funcDeprecated(),
});
```

Команда:

```bash
npm run remove-feature -- isCheckoutEnabled on
```

Результат:

```ts
const result = funcNew();
```

### Пример удаления компонента

До удаления:

```tsx
<ToggleFeatures
  feature="isCheckoutEnabled"
  on={<ComponentNew />}
  off={<ComponentDeprecated />}
/>
```

После запуска той же команды:

```tsx
<ComponentNew />
```

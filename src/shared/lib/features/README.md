## Фича feature flags

Описание:
содержит helpers и UI для работы с feature flags.

#### Public API

- Lib

`getFeatureFlag` - получение значения feature flag

`setFeatureFlags` - установка feature flags

`toggleFeatures` - выбор реализации по feature flag

- Services

`updateFeatureFlag` - обновление feature flag

- Components

`ToggleFeatures` - компонент для переключения старой и новой реализации

#### Пример

```ts
import { ToggleFeatures, getFeatureFlag, toggleFeatures } from "@/features/features";
```

## Фича авторизации по username

Описание:
содержит модальное окно логина и redux-модель формы авторизации.

#### Public API

- Types

`LoginSchema` - схема состояния формы логина

- Model

`loginActions` - actions формы логина

- Components

`LoginModal` - модальное окно авторизации

#### Пример

```ts
import { LoginModal, loginActions, type LoginSchema } from "@/features/authByUsername";
```

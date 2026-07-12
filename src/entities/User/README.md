## Сущность пользователя

Описание:
содержит типы, роли, selectors и redux-модель пользователя.

#### Public API

- Types

`User` - тип пользователя

`UserSchema` - схема состояния пользователя

- Consts

`UserRole` - роли пользователя

- Selectors

`getUserAuthData` - данные авторизованного пользователя

`getUserInited` - признак инициализации пользователя

`getUserRoles` - список ролей пользователя

`isUserAdmin` - проверка роли администратора

`isUserManager` - проверка роли менеджера

- Model

`userActions` - actions пользователя

`userReducer` - редьюсер пользователя

- Cross imports

`@x/Article` - экспорт `User` для сущности `Article`

`@x/Comment` - экспорт `User` для сущности `Comment`

#### Пример

```ts
import { getUserAuthData, UserRole, type User } from "@/entities/User";
```

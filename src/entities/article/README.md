## Сущность статьи

Описание:
содержит типы, константы и UI для отображения статьи и элементов списка статей.

#### Public API

- Types

`Article` - тип статьи

`ArticleDetailsSchema` - схема состояния детальной информации о статье

- Consts

`ArticleView` - варианты отображения списка статей

`ArticleType` - типы статей

`ArticleSortField` - поля сортировки статей

`ArticleBlockType` - типы блоков внутри статьи

`articleTypeTabsItems` - опции табов по типам статей

`articleSortSelectOptions` - опции сортировки статей

`articleRecommendationsListLimit` - лимит рекомендаций статей

- Selectors

`getArticleDetailsData` - Селектор для получения информации о текущей открытой статье

- Components

`ArticleDetails` - компонент с детальной информацией о статье

`ArticleListItemBig` - большой вариант карточки статьи

`ArticleListItemBigSkeleton` - скелетон большой карточки статьи

`ArticleListItemSmall` - компактный вариант карточки статьи

`ArticleListItemSmallSkeleton` - скелетон компактной карточки статьи

#### Пример

```ts
import { ArticleDetails, ArticleView, type Article } from "@/entities/Article";
```

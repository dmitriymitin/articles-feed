import { SelectOption } from "@/shared/ui/Select";
import { TabItem } from "@/shared/ui/Tabs";
import { Trans } from "@/shared/ui/Translate";

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export enum ArticleType {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL',
}

export const articleTypeTabsItems: TabItem<ArticleType>[] = [
    {
        value: ArticleType.ALL,
        content: <Trans>Все статьи</Trans>,
    },
    {
        value: ArticleType.IT,
        content: <Trans>Айти</Trans>,
    },
    {
        value: ArticleType.ECONOMICS,
        content: <Trans>Экономика</Trans>,
    },
    {
        value: ArticleType.SCIENCE,
        content: <Trans>Наука</Trans>,
    },
]

export const articleSortSelectOptions: SelectOption<ArticleSortField>[] = [
    {
        value: ArticleSortField.CREATED,
        content: <Trans>дате создания</Trans>,
    },
    {
        value: ArticleSortField.TITLE,
        content: <Trans>названию</Trans>,
    },
    {
        value: ArticleSortField.VIEWS,
        content: <Trans>просмотрам</Trans>,
    },
]

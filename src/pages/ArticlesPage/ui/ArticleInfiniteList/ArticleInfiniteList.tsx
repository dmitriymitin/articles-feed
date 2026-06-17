import { memo } from "react";
import { useSelector } from "react-redux";

import { Text } from "@/shared/ui/Text";

import { useAppQueryState } from "@/shared/lib/hooks/useAppQueryState/useAppQueryState";
import { articlesPageSearchParams } from "@/shared/const/searchParams";

import { ArticleView } from "@/entities/Article";

import { getArticlesPageError, getArticlesPageIsLoading } from "../../model/selectors/articlesPage";
import { getArticles } from "../../model/slices/articlesPageSlice";

import { renderArticleListItem } from "./renderArticleItem";
import { renderArticleListItemSkeleton } from "./renderArticleItemSkeleton";


const _ArticleInfiniteList = () => {
    const [searchView] = useAppQueryState(articlesPageSearchParams, 'view')
    const view = searchView!

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);

    if (!isLoading && !error && !articles.length) {
        return <Text size='size_l' title='Статьи не найдены' />;
    }

    return (
      <>
        {articles.map((article) => renderArticleListItem(view, article))}
        {
          isLoading && new Array(view === ArticleView.SMALL ? 9 : 3)
            .fill(0)
            .map((_, index) => renderArticleListItemSkeleton(view, index))
        }
        {error && <Text theme='error' text='Ошибка при загрузке статей' />}
      </>
    );
};

export const ArticleInfiniteList = memo(_ArticleInfiniteList)

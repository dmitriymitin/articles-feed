import { useQueryStates } from "nuqs";
import { useSelector } from "react-redux";

import { Text } from "@/shared/ui/Text";

import { cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { articlesPageSearchParams } from "@/shared/const/router";

import { ArticleView } from "@/entities/Article";

import { useAppQueryState } from "../../../../shared/lib/hooks/useAppQueryState/useAppQueryState";

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
} from "../../model/selectors/articlesPageSelectors";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import {
  articlesPageActions,
  getArticles,
} from "../../model/slices/articlesPageSlice";

import { renderArticleListItem } from "./renderArticleItem";
import { renderArticleListItemSkeleton } from "./renderArticleItemSkeleton";

import s from "./ArticleInfiniteList.module.scss";

const ArticleListWrapper = ({ children, className }) => {
  const [view] = useAppQueryState(articlesPageSearchParams, 'view')

  return (
    <div
      className={cn(s[view!], className)}
      data-testid="ArticleListWrapper"
    >
      {children}
    </div>
  )
}

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const [searchParams] = useQueryStates(articlesPageSearchParams)

    useInitialEffect(() => {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList(searchParams));
    }, [
      searchParams.sort,
      searchParams.type,
      searchParams.order,
      searchParams.search
    ]);

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);

    if (isLoading) {
        return (
          <ArticleListWrapper className={className}>
              {
                  new Array(searchParams.view === ArticleView.SMALL ? 9 : 3)
                    .fill(0)
                    .map((_, index) => renderArticleListItemSkeleton(searchParams.view, index))
              }
          </ArticleListWrapper>
        )
    }

    if (error) {
        return <Text theme='error' text='Ошибка при загрузке статей' />;
    }

    if (!articles.length) {
        return <Text size='size_l' title='Статьи не найдены' />;
    }

    return (
      <ArticleListWrapper className={className}>
          {articles.map((article) => renderArticleListItem(searchParams.view, article))}
      </ArticleListWrapper>
    );
};

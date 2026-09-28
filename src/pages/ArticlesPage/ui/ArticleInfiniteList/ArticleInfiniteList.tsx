import { memo, Suspense } from 'react';
import { useSelector } from 'react-redux';

import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { useAppQueryState } from '@/shared/lib/hooks/useAppQueryState/useAppQueryState';
import { articlesPageSearchParams } from '@/shared/const/searchParams';

import { ArticleView } from '@/entities/article';

import { Flex } from '../../../../shared/ui/redesigned/Flex';

import {
  getArticlesPageError,
  getArticlesPageIsLoading,
} from '../../model/selectors/articlesPage';
import { getArticles } from '../../model/slices/articlesPageSlice';

import { renderArticleListItem } from './renderArticleItem';
import { renderArticleListItemSkeleton } from './renderArticleItemSkeleton';

import s from './ArticleInfiniteList.module.scss';

export interface RenderArticleItemOptions {
  classNameBig?: string;
  classNameSmall?: string;
}

const _ArticleInfiniteList = () => {
  const [searchView] = useAppQueryState(articlesPageSearchParams, 'view');
  const view = searchView!;

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);

  if (!isLoading && !error && !articles.length) {
    return <TextDeprecated size="size_l" title="Статьи не найдены" />;
  }

  const renderArticleItemOptions: RenderArticleItemOptions = {
    classNameSmall: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => s.cardSmall,
    }),
    classNameBig: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => undefined,
      off: () => s.cardBig,
    }),
  };

  const skeletonsNode = (
    <>
      {isLoading &&
        new Array(view === ArticleView.SMALL ? 9 : 3)
          .fill(0)
          .map((_, index) =>
            renderArticleListItemSkeleton(
              view,
              index,
              renderArticleItemOptions,
            ),
          )}
    </>
  );

  return (
    <>
      <Suspense fallback={<LoaderDeprecated />}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Flex align="center" wrap="wrap" gap="16" data-testid="ArticleList">
              {articles.map((article) =>
                renderArticleListItem(view, article, renderArticleItemOptions),
              )}
              {skeletonsNode}
            </Flex>
          }
          off={
            <div className={s[view]} data-testid="ArticleList">
              {articles.map((article) =>
                renderArticleListItem(view, article, renderArticleItemOptions),
              )}
              {skeletonsNode}
            </div>
          }
        />
      </Suspense>
      {error && (
        <TextDeprecated theme="error" text="Ошибка при загрузке статей" />
      )}
    </>
  );
};

export const ArticleInfiniteList = memo(_ArticleInfiniteList);

import { Suspense } from 'react';

import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Text } from '@/shared/ui/redesigned/Text';

import { ToggleFeatures } from '@/shared/lib/features';

import {
  ArticleListItemSmall,
  ArticleListItemSmallSkeleton,
  articleRecommendationsListLimit,
} from '@/entities/article';

import { useArticleRecommendationsListQuery } from '../../api/aritcleRecommendationsApi';

const ArticleRecommendationsList = () => {
  const {
    isLoading,
    data: articles,
    error,
  } = useArticleRecommendationsListQuery(articleRecommendationsListLimit);

  if (error) {
    return <></>;
  }

  const articlesNode = (
    <>
      <Suspense fallback={<LoaderDeprecated />}>
        {isLoading &&
          new Array(articleRecommendationsListLimit)
            .fill('')
            .map((_, index) => <ArticleListItemSmallSkeleton key={index} />)}
      </Suspense>
      {articles?.map((article) => (
        <ArticleListItemSmall
          key={article.id}
          article={article}
          target="_blank"
        />
      ))}
    </>
  );

  return (
    <Flex data-testid="ArticleRecommendationsList" vertical gap="8">
      <ToggleFeatures
        feature="isAppRedesigned"
        on={<Text size="l" title="Рекомендуем" />}
        off={<TextDeprecated size="size_l" title="Рекомендуем" />}
      />
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Flex align="center" wrap="wrap" gap="16" data-testid="ArticleList">
            {articlesNode}
          </Flex>
        }
        off={
          <Flex wrap="wrap" gap="30" data-testid="ArticleList">
            {articlesNode}
          </Flex>
        }
      />
    </Flex>
  );
};

export default ArticleRecommendationsList;

import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';

import {
  ArticleListItemSmall,
  ArticleListItemSmallSkeleton,
  articleRecommendationsListLimit,
} from '@/entities/article';

import { useArticleRecommendationsListQuery } from '../../api/aritcleRecommendationsApi';

const ArticleRecommendationsList = () => {
  const { t } = useTranslation();
  const {
    isLoading,
    data: articles,
    error,
  } = useArticleRecommendationsListQuery(articleRecommendationsListLimit);

  if (error) {
    return <></>;
  }

  return (
    <Flex data-testid="ArticleRecommendationsList" vertical gap="8">
      <TextDeprecated size="size_l" title={t('Рекомендуем')} />
      <Flex wrap="wrap" gap="30">
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
      </Flex>
    </Flex>
  );
};

export default ArticleRecommendationsList;

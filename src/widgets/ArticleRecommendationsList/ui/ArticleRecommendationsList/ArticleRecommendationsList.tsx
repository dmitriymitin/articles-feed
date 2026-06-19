import { useTranslation } from 'react-i18next';

import { Flex } from "@/shared/ui/Flex";
import { Text } from '@/shared/ui/Text';

import {
  ArticleListItemSmall,
  ArticleListItemSmallSkeleton,
  articleRecommendationsListLimit,
} from "@/entities/Article";

import { useArticleRecommendationsListQuery } from '../../api/aritcleRecommendationsApi';

const ArticleRecommendationsList =  () => {
  const { t } = useTranslation();
  const { isLoading, data: articles, error } = useArticleRecommendationsListQuery(articleRecommendationsListLimit);

  if (error) {
    return <></>;
  }

  return (
    <Flex data-testid="ArticleRecommendationsList" vertical gap="8">
      <Text
        size='size_l'
        title={t('Рекомендуем')}
      />
      <Flex wrap='wrap' gap='30'>
        {isLoading && (
          new Array(articleRecommendationsListLimit).fill('')
            .map((_, index) => <ArticleListItemSmallSkeleton key={index} />)
        )}
        {articles?.map((article) =>
          <ArticleListItemSmall key={article.id} article={article} target='_blank' />
        )}
      </Flex>
    </Flex>
  );
}

export default ArticleRecommendationsList;

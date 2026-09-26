import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ReducersList } from '@/app/providers/StoreProvider';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';

import { ArticleDetails } from '@/entities/article';

import { ArticleRating } from '@/features/rateArticle';
import { Page } from '@/widgets/Page';

import { articleDetailsPageReducer } from '../../model/slices';

import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsRecommendations } from '../ArticleDetailsRecommendations/ArticleDetailsRecommendations';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page>
      <DynamicModuleLoader reducers={reducers}>
        <Flex vertical gap="16" max>
          <ArticleDetailsPageHeader articleId={id} />
          <ArticleDetails articleId={id} />
          <ToggleFeatures
            feature="isArticleRatingEnabled"
            on={<ArticleRating articleId={id} />}
            off={<CardDeprecated>Оценка статей скоро появится!</CardDeprecated>}
          />
          <ArticleDetailsRecommendations />
          <ArticleDetailsComments articleId={id} />
        </Flex>
      </DynamicModuleLoader>
    </Page>
  );
};

export default ArticleDetailsPage;

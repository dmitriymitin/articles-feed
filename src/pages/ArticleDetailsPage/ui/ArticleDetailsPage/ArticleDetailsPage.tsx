import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { ReducersList } from '@/app/providers/StoreProvider';

import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card } from '@/shared/ui/redesigned/Card';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ToggleFeatures } from '@/shared/lib/features';

import { ArticleDetails } from '@/entities/article';

import { ArticleRating } from '@/features/rateArticle';
import { Page } from '@/widgets/Page';

import { articleDetailsPageReducer } from '../../model/slices';

import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetailsRecommendations } from '../ArticleDetailsRecommendations/ArticleDetailsRecommendations';

import s from './ArticleDetailsPage.module.scss';

import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <StickyContentLayout
            content={
              <Page className={s.ArticleDetailsPage}>
                <Flex vertical gap="16" max>
                  <Card fullWidth border="partial" padding="24">
                    <ArticleDetails articleId={id} />
                  </Card>
                  <ArticleRating articleId={id} />
                  <ArticleDetailsRecommendations />
                  <ArticleDetailsComments articleId={id} />
                </Flex>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page className={s.ArticleDetailsPage}>
            <Flex vertical gap="16" max>
              <ArticleDetailsPageHeader articleId={id} />
              <ArticleDetails articleId={id} />
              <ToggleFeatures
                feature="isArticleRatingEnabled"
                on={<ArticleRating articleId={id} />}
                off={
                  <CardDeprecated>Оценка статей скоро появится!</CardDeprecated>
                }
              />
              <ArticleDetailsRecommendations />
              <ArticleDetailsComments articleId={id} />
            </Flex>
          </Page>
        }
      />
    </DynamicModuleLoader>
  );

  // return (
  //   <Page>
  //     <DynamicModuleLoader reducers={reducers}>
  //       <Flex vertical gap="16" max>
  //         <ArticleDetailsPageHeader articleId={id} />
  //         <ArticleDetails articleId={id} />
  //         <ToggleFeatures
  //           feature="isArticleRatingEnabled"
  //           on={<ArticleRating articleId={id} />}
  //           off={<CardDeprecated>Оценка статей скоро появится!</CardDeprecated>}
  //         />
  //         <ArticleDetailsRecommendations />
  //         <ArticleDetailsComments articleId={id} />
  //       </Flex>
  //     </DynamicModuleLoader>
  //   </Page>
  // );
};

export default ArticleDetailsPage;

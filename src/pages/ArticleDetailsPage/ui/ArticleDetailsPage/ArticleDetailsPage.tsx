import React from 'react';
import { useParams } from "react-router-dom";

import { ReducersList } from "@/app/providers/StoreProvider";

import { Flex } from "@/shared/ui/Flex";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { ArticleDetails } from "@/entities/Article";

import { Page } from '@/widgets/Page';

import { articleDetailsPageReducer } from "../../model/slices";

import { ArticleDetailsCommentsContainer } from "../ArticleDetailsCommentsContainer/ArticleDetailsCommentsContainer";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import {
  ArticleDetailsRecommendationContainer
} from '../ArticleDetailsRecommendationContainer/ArticleDetailsRecommendationContainer';

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <DynamicModuleLoader reducers={reducers}>
        <Flex vertical gap='16' max>
          <ArticleDetailsPageHeader articleId={id!} />
          <ArticleDetails articleId={id!} />
          <ArticleDetailsRecommendationContainer />
          <ArticleDetailsCommentsContainer articleId={id!} />
        </Flex>
      </DynamicModuleLoader>
    </Page>
  );
};

export default ArticleDetailsPage

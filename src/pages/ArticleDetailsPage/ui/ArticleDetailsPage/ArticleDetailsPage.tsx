import React from 'react';
import { useParams } from "react-router-dom";

import { ReducersList } from "@/app/providers/StoreProvider";

import { Flex } from "@/shared/ui/Flex";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { ArticleDetails } from "@/entities/Article";

import { Page } from '@/widgets/Page';

import { articleDetailsPageReducer } from "../../model/slices";

import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleDetailsRecommendations } from '../ArticleDetailsRecommendations/ArticleDetailsRecommendations';

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
          <ArticleDetailsRecommendations />
          <ArticleDetailsComments articleId={id!} />
        </Flex>
      </DynamicModuleLoader>
    </Page>
  );
};

export default ArticleDetailsPage

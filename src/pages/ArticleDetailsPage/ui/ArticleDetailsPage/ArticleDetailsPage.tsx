import React from 'react';
import { useParams } from "react-router-dom";

import { ReducersList } from "@/app/providers/StoreProvider";

import { Flex } from "@/shared/ui/Flex";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { articleDetailsPageReducer } from "../../model/slices";

import { ArticleDetailsCommentsContainer } from "../ArticleDetailsCommentsContainer/ArticleDetailsCommentsContainer";

import { ArticleDetails } from "@/entities/Article";

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Flex vertical gap='16' max>
        <ArticleDetails articleId={id!} />
        <ArticleDetailsCommentsContainer articleId={id!} />
      </Flex>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage

import React, { Suspense } from "react";

import { Flex } from "@/shared/ui/Flex";
import { Loader } from "@/shared/ui/Loader";
import { Text } from "@/shared/ui/Text";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";

import { Article } from "@/entities/Article"

import { AddCommentForm } from "@/features/addCommentForm";

import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";

interface ArticleDetailsCommentsContainerProps {
  articleId: Article['id'];
}

export const ArticleDetailsCommentsContainer = (props: ArticleDetailsCommentsContainerProps) => {
  const { articleId } = props;

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
  }, [articleId]);

  const onSendComment = (text: string) => {
    dispatch(addCommentForArticle({ comment: text, articleId }));
  }

  return (
    <Flex vertical gap="16" max>
      <Text size='size_l' title='Комментарии'/>
      <Suspense fallback={<Loader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <ArticleDetailsComments />
    </Flex>
  );
};

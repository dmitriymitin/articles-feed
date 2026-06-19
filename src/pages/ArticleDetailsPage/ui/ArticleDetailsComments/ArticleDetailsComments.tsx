import React, { Suspense } from "react";

import { Flex } from "@/shared/ui/Flex";
import { Loader } from "@/shared/ui/Loader";
import { Text } from "@/shared/ui/Text";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { Article } from "@/entities/Article";

import { AddArticleComment } from "@/features/addArticleComment";
import { ArticleCommentsList, refetchArticleCommentsListQuery } from "@/widgets/ArticleCommentsList";

interface ArticleDetailsCommentsProps {
  articleId: Article['id'];
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
  const { articleId } = props;
  const dispatch = useAppDispatch();

  const onSendComment = () => {
    dispatch(refetchArticleCommentsListQuery(articleId))
  }

  return (
    <Flex vertical gap="16" max>
      <Text size='size_l' title='Комментарии'/>
      <Suspense fallback={<Loader />}>
        <AddArticleComment articleId={articleId} onSendComment={onSendComment} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <ArticleCommentsList articleId={articleId} />
      </Suspense>
    </Flex>
  );
};

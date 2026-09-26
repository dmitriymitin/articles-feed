import React from 'react';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';

import { Article } from '@/entities/article';

import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

import { ArticleDetailsCommentsOld } from './ArticleDetailsCommentsOld';

interface ArticleDetailsCommentsContainerProps {
  articleId: Article['id'];
}

export const ArticleDetailsCommentsContainer = (
  props: ArticleDetailsCommentsContainerProps,
) => {
  const { articleId } = props;

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(articleId));
  }, [articleId]);

  // const onSendComment = (text: string) => {
  //   dispatch(addCommentForArticle({ comment: text, articleId }));
  // }

  return (
    <Flex vertical gap="16" max>
      <TextDeprecated size="size_l" title="Комментарии" />
      {/* <Suspense fallback={<Loader />}> */}
      {/*  <AddCommentForm onSendComment={onSendComment} /> */}
      {/* </Suspense> */}
      <ArticleDetailsCommentsOld />
    </Flex>
  );
};

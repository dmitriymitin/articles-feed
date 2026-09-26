import React, { Suspense } from 'react';

import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Article } from '@/entities/article';

import { AddArticleComment } from '@/features/addArticleComment';
import {
  ArticleCommentsList,
  refetchArticleCommentsListQuery,
} from '@/widgets/ArticleCommentsList';

interface ArticleDetailsCommentsProps {
  articleId: Article['id'];
}

export const ArticleDetailsComments = (props: ArticleDetailsCommentsProps) => {
  const { articleId } = props;
  const dispatch = useAppDispatch();

  const onSendComment = () => {
    dispatch(refetchArticleCommentsListQuery(articleId));
  };

  return (
    <Flex vertical gap="16" max>
      <TextDeprecated size="size_l" title="Комментарии" />
      <Suspense fallback={<LoaderDeprecated />}>
        <AddArticleComment
          articleId={articleId}
          onSendComment={onSendComment}
        />
      </Suspense>
      <Suspense fallback={<LoaderDeprecated />}>
        <ArticleCommentsList articleId={articleId} />
      </Suspense>
    </Flex>
  );
};

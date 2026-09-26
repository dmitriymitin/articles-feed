import React, { PropsWithChildren } from 'react';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { Article } from '@/entities/article';
import { CommentCard, CommentCardSkeleton } from '@/entities/comment';

import { useArticleCommentsListQuery } from '../../api/aritcleCommentsApi';

const CommentsWrapper = ({ children }: PropsWithChildren) => (
  <Flex vertical gap="16" max>
    {children}
  </Flex>
);

export interface ArticleCommentsListProps {
  articleId: Article['id'];
}

const ArticleCommentsList = (props: ArticleCommentsListProps) => {
  const { articleId } = props;

  const {
    data: comments,
    isLoading,
    isFetching: isRefetching,
    error,
  } = useArticleCommentsListQuery(articleId);

  if (error) {
    return <></>;
  }

  if (isLoading) {
    return (
      <CommentsWrapper>
        <CommentCardSkeleton />
        <CommentCardSkeleton />
        <CommentCardSkeleton />
      </CommentsWrapper>
    );
  }

  if (!comments?.length) {
    return (
      <Flex align="center" justify="center">
        <TextDeprecated text="Комментарии отсутствуют" />
      </Flex>
    );
  }

  return (
    <CommentsWrapper>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
      {isRefetching && <CommentCardSkeleton />}
    </CommentsWrapper>
  );
};

export default ArticleCommentsList;

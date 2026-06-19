import React, { PropsWithChildren } from "react";

import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";

import { Article } from "@/entities/Article";
import { CommentCard, CommentCardSkeleton } from "@/entities/Comment";

import { useArticleCommentsListQuery } from '../../api/aritcleCommentsApi';

const CommentsWrapper = ({ children }: PropsWithChildren) => (
  <Flex vertical gap="16" max>
    {children}
  </Flex>
)

export interface ArticleCommentsListProps {
  articleId: Article['id'];
}

const ArticleCommentsList = (props: ArticleCommentsListProps) => {
  const { articleId } = props

  const {
    data: comments,
    isLoading,
    isFetching: isRefetching,
    error,
  } = useArticleCommentsListQuery(articleId);

  if (error) {
    return <></>
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
      <Flex align='center' justify='center'>
        <Text text='Комментарии отсутствуют' />
      </Flex>
    )
  }

  return (
    <CommentsWrapper>
      {comments.map((comment) =>
        <CommentCard key={comment.id} comment={comment}/>
      )}
      {isRefetching && <CommentCardSkeleton />}
    </CommentsWrapper>
  );
};

export default ArticleCommentsList;

import { PropsWithChildren } from "react";
import { useSelector } from 'react-redux';

import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";

import { CommentCard, CommentCardSkeleton } from "@/entities/Comment";

import { getArticleCommentsIsLoading } from "../../model/selectors/comments/comments";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice";

const CommentsWrapper = ({ children }: PropsWithChildren) => (
  <Flex vertical gap="16" max>
    {children}
  </Flex>
)

export const ArticleDetailsComments = () => {
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  if (commentsIsLoading) {
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
    </CommentsWrapper>
  );
}

import { useSelector } from 'react-redux';

import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";

import { getArticleCommentsIsLoading } from "../../model/selectors/comments/comments";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice/articleDetailsCommentsSlice";

import { CommentCard, CommentCardSkeleton } from "@/entities/Comment";


export const ArticleDetailsComments = () => {
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  if (commentsIsLoading) {
    return (
      <Flex vertical gap="16" max>
        <CommentCardSkeleton />
        <CommentCardSkeleton />
        <CommentCardSkeleton />
      </Flex>
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
    <Flex vertical gap="16" max>
      {comments.map((comment) =>
        <CommentCard key={comment.id} comment={comment}/>
      )}
    </Flex>
  );
}

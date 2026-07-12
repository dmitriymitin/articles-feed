import { useState } from "react";

import { Button } from "@/shared/ui/Button";
import { Flex } from "@/shared/ui/Flex";
import { Input } from "@/shared/ui/Input";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { Article } from "@/entities/Article";

import { addArticleComment } from "../../model/services/addArticleComment/addArticleComment";

import s from "./AddArticleComment.module.scss";

export interface AddArticleCommentProps {
  articleId: Article["id"];
  onSendComment: () => void;
}

const AddArticleComment = (props: AddArticleCommentProps) => {
  const { articleId, onSendComment } = props;

  const [comment, setComment] = useState<string>("");
  const dispatch = useAppDispatch();

  const sendComment = async () => {
    const response = await dispatch(addArticleComment({ comment, articleId }));

    if (response.meta.requestStatus !== "rejected") {
      setComment("");
      onSendComment();
    }
  };

  return (
    <Flex
      data-testid="AddArticleComment"
      align="center"
      justify="between"
      max
      className={s.AddCommentForm}
    >
      <Input
        className={s.input}
        placeholder="Введите текст комментария"
        value={comment}
        data-testid="AddArticleComment.Input"
        onChange={setComment}
      />
      <Button
        data-testid="AddArticleComment.Button"
        theme="outline"
        onClick={sendComment}
      >
        Отправить
      </Button>
    </Flex>
  );
};

export default AddArticleComment;

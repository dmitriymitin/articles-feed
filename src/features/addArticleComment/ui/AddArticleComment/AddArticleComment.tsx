import { useState } from 'react';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { Article } from '@/entities/article';

import { addArticleComment } from '../../model/services/addArticleComment/addArticleComment';

import s from './AddArticleComment.module.scss';

export interface AddArticleCommentProps {
  articleId: Article['id'];
  onSendComment: () => void;
}

const AddArticleComment = (props: AddArticleCommentProps) => {
  const { articleId, onSendComment } = props;

  const [comment, setComment] = useState<string>('');
  const dispatch = useAppDispatch();

  const sendComment = async () => {
    const response = await dispatch(addArticleComment({ comment, articleId }));

    if (response.meta.requestStatus !== 'rejected') {
      setComment('');
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
      <InputDeprecated
        className={s.input}
        placeholder="Введите текст комментария"
        value={comment}
        data-testid="AddArticleComment.Input"
        onChange={setComment}
      />
      <ButtonDeprecated
        data-testid="AddArticleComment.Button"
        theme="outline"
        onClick={sendComment}
      >
        Отправить
      </ButtonDeprecated>
    </Flex>
  );
};

export default AddArticleComment;

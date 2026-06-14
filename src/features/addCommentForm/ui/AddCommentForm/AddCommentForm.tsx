import { useState } from 'react';

import { Button } from "@/shared/ui/Button";
import { Flex } from "@/shared/ui/Flex";
import { Input } from '@/shared/ui/Input';
import { Trans } from "@/shared/ui/Translate";

import s from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    onSendComment: (text: string) => void;
}

const AddCommentForm = (props: AddCommentFormProps) => {
    const { onSendComment } = props;
    const [comment, setComment] = useState<string>('')

    const onSendHandler = () => {
        onSendComment(comment);
        setComment('');
    };

    return (
      <Flex
        data-testid="AddCommentForm"
        align='center'
        justify="between"
        max
        className={s.AddCommentForm}
      >
          <Input
            className={s.input}
            placeholder='Введите текст комментария'
            value={comment}
            data-testid="AddCommentForm.Input"
            onChange={setComment}
          />
          <Button
            data-testid="AddCommentForm.Button"
            theme='outline'
            onClick={onSendHandler}
          >
              <Trans>Отправить</Trans>
          </Button>
      </Flex>
    );
}

export default AddCommentForm;

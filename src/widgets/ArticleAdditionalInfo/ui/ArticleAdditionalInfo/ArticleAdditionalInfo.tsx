import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Text } from '@/shared/ui/redesigned/Text';

import { User } from '@/entities/user';

import s from './ArticleAdditionalInfo.module.scss';

interface ArticleAdditionalInfoProps {
  className?: string;
  author: User;
  createdAt: string;
  views: number;
  onEdit: () => void;
}

export const ArticleAdditionalInfo = memo(
  (props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, views, onEdit } = props;
    const { t } = useTranslation();

    return (
      <Flex vertical gap="32" className={s.ArticleAdditionalInfo}>
        <Flex align="center" gap="8">
          <Avatar src={author.avatar} size={32} />
          <Text text={author.username} bold />
          <Text text={createdAt} />
        </Flex>
        <Button onClick={onEdit}>Редактировать</Button>
        <Text text={t('{{count}} просмотров', { count: views })} />
      </Flex>
    );
  },
);

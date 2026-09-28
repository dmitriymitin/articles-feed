import React from 'react';

import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleListItemUserProps {
  avatar?: string;
  username?: string;
  classNameAvatar?: string;
}

export const ArticleListItemUser = (props: ArticleListItemUserProps) => {
  const { avatar, username, classNameAvatar } = props;

  return (
    <>
      <Avatar size={32} src={avatar} className={classNameAvatar} />
      <Text bold text={username} />
    </>
  );
};

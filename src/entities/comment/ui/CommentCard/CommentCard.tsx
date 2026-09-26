import React from 'react';

import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

import { getRouteProfile } from '@/shared/const/router';

import { Comment } from '../../model/types/comment';

import { CommentCardWrapper } from './CommentCardWrapper';

import s from './CommentCard.module.scss';

interface CommentCardProps {
  comment: Comment;
}

export const CommentCard = (props: CommentCardProps) => {
  const { comment } = props;

  return (
    <CommentCardWrapper>
      <AppLinkDeprecated
        to={getRouteProfile(comment.user.id)}
        className={s.header}
      >
        {comment.user.avatar && (
          <AvatarDeprecated
            size={30}
            src={comment.user.avatar}
            alt={comment.user.username}
          />
        )}
        <TextDeprecated className={s.username} title={comment.user.username} />
      </AppLinkDeprecated>
      <TextDeprecated className={s.text} text={comment.text} />
    </CommentCardWrapper>
  );
};

import React from 'react';

import { AppLink } from "@/shared/ui/AppLink";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Text } from "@/shared/ui/Text";

import { getRouteProfile } from "@/shared/const/router";

import { Comment } from '../../model/types/comment';

import { CommentCardWrapper } from "./CommentCardWrapper";

import s from './CommentCard.module.scss'

interface CommentCardProps {
  comment: Comment;
}

export const CommentCard = (props: CommentCardProps) => {
  const { comment } = props;

  return (
    <CommentCardWrapper>
      <AppLink to={getRouteProfile(comment.user.id)} className={s.header}>
        {comment.user.avatar && (
          <Avatar
            size={30}
            src={comment.user.avatar}
            alt={comment.user.username}
          />
        )}
        <Text className={s.username} title={comment.user.username} />
      </AppLink>
      <Text className={s.text} text={comment.text} />
    </CommentCardWrapper>
  );
};

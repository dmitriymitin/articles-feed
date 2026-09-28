import React from 'react';

import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Text } from '@/shared/ui/redesigned/Text';

import { ToggleFeatures } from '@/shared/lib/features';
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" border="partial" fullWidth>
          <Flex vertical data-testid="CommentCard.Content" gap="8" max>
            <AppLink to={getRouteProfile(comment.user.id)}>
              <Flex align="center" gap="8">
                {comment.user.avatar ? (
                  <Avatar size={30} src={comment.user.avatar} />
                ) : null}
                <Text text={comment.user.username} bold />
              </Flex>
            </AppLink>
            <Text text={comment.text} />
          </Flex>
        </Card>
      }
      off={
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
            <TextDeprecated
              className={s.username}
              title={comment.user.username}
            />
          </AppLinkDeprecated>
          <TextDeprecated className={s.text} text={comment.text} />
        </CommentCardWrapper>
      }
    />
  );
};

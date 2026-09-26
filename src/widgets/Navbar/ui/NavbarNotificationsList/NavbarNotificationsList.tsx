import React from 'react';

import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

import { cn } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';

import {
  NotificationItem,
  useNotificationsQuery,
} from '@/entities/notification';

import s from './NavbarNotificationsList.module.scss';

const NotificationsWrapper = ({ children, className }) => (
  <Flex vertical gap="16" max className={cn(s.NotificationList, className)}>
    {children}
  </Flex>
);

interface NavbarNotificationsListProps {
  className?: string;
}

export const NavbarNotificationsList = (
  props: NavbarNotificationsListProps,
) => {
  const { className } = props;

  const {
    data: notifications,
    isLoading,
    error,
  } = useNotificationsQuery(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });

    const skeleton = <Skeleton width="100%" border="8px" height="80px" />;

    return (
      <NotificationsWrapper className={className}>
        {skeleton}
        {skeleton}
        {skeleton}
      </NotificationsWrapper>
    );
  }

  if (error) {
    return (
      <TextDeprecated
        theme="error"
        text="Произошла ошбка при получений уведомлений"
      />
    );
  }

  if (!notifications) {
    return <TextDeprecated text="Уведомений пока нет" />;
  }

  return (
    <NotificationsWrapper className={className}>
      {notifications?.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </NotificationsWrapper>
  );
};

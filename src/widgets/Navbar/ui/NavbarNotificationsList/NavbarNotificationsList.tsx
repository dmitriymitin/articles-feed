import React from "react";

import { Flex } from "@/shared/ui/Flex";
import { Skeleton } from "@/shared/ui/Skeleton";
import { Text } from "@/shared/ui/Text";

import { cn } from "@/shared/lib/classNames/classNames";

import { NotificationItem, useNotifications } from "@/entities/Notification";

import s from './NavbarNotificationsList.module.scss'

const NotificationsWrapper = ({ children, className }) => (
  <Flex vertical gap='16' max className={cn(s.NotificationList, className)}>
    {children}
  </Flex>
)

interface NavbarNotificationsListProps {
  className?: string;
}

export const NavbarNotificationsList = (props: NavbarNotificationsListProps) => {
  const { className } = props;

  const { data: notifications, isLoading, error } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    const skeleton = <Skeleton width='100%' border='8px' height='80px' />
    return (
      <NotificationsWrapper className={className}>
        {skeleton}
        {skeleton}
        {skeleton}
      </NotificationsWrapper>
    )
  }

  if (error) {
    return <Text theme='error' text='Произошла ошбка при получений уведомлений' />;
  }

  if (!notifications) {
    return <Text text='Уведомений пока нет' />;
  }

  return (
    <NotificationsWrapper className={className}>
      {notifications?.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </NotificationsWrapper>
  );
};

import { Card } from '@/shared/ui/Card';
import { Text  } from '@/shared/ui/Text';

import { Notification } from '../../model/types/notification';

import s from './NotificationItem.module.scss';

interface NotificationItemProps {
    notification: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { notification } = props;

  const content = (
    <Card
      theme='outlined'
      className={s.NotificationItem}
    >
      <Text
        title={notification.title}
        text={notification.description}
      />
    </Card>
  );

  if (notification.href) {
    return (
      <a
        className={s.link}
        target="_blank"
        href={notification.href}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
};

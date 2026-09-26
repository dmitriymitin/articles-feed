import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';

import { ToggleFeatures } from '../../../../shared/lib/features';

import { Notification } from '../../model/types/notification';

import s from './NotificationItem.module.scss';

interface NotificationItemProps {
  notification: Notification;
}

export const NotificationItem = (props: NotificationItemProps) => {
  const { notification } = props;

  const content = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card className={s.NotificationItem}>
          <Text title={notification.title} text={notification.description} />
        </Card>
      }
      off={
        <CardDeprecated theme="outlined" className={s.NotificationItem}>
          <TextDeprecated
            title={notification.title}
            text={notification.description}
          />
        </CardDeprecated>
      }
    />
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

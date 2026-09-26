import React, { useCallback, useState } from 'react';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Popover as PopoverDeprecated } from '@/shared/ui/deprecated/Popups';
import { BrowserView, MobileView } from '@/shared/ui/DeviceDetect';
import { Drawer } from '@/shared/ui/Drawer';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Popover } from '@/shared/ui/redesigned/Popups';

import { ToggleFeatures } from '@/shared/lib/features';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import NotificationIconDeprecated from '@/shared/assets/icons/notification-20-20.svg';

import { NavbarNotificationsList } from '../NavbarNotificationsList/NavbarNotificationsList';

import s from './NavbarShowNotificationsButton.module.scss';

export const NavbarShowNotificationsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const trigger = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Icon Svg={NotificationIcon} clickable onClick={toggleDrawer} />}
      off={
        <ButtonDeprecated onClick={toggleDrawer} theme="clear">
          <IconDeprecated Svg={NotificationIconDeprecated} inverted />
        </ButtonDeprecated>
      }
    />
  );

  const list = <NavbarNotificationsList className={s.notifications} />;

  return (
    <div>
      <BrowserView>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Popover direction="bottom left" trigger={trigger}>
              {list}
            </Popover>
          }
          off={
            <PopoverDeprecated direction="bottom left" trigger={trigger}>
              {list}
            </PopoverDeprecated>
          }
        />
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={toggleDrawer}>
          <NavbarNotificationsList />
        </Drawer>
      </MobileView>
    </div>
  );
};

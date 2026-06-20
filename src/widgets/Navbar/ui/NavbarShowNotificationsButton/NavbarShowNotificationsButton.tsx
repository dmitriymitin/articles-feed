import React, { useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { Button } from "@/shared/ui/Button";
import { Drawer } from "@/shared/ui/Drawer";
import { Icon } from "@/shared/ui/Icon";
import { Popover } from "@/shared/ui/Popups";

import NotificationIcon from "@/shared/assets/icons/notification-20-20.svg";

import { NavbarNotificationsList } from "../NavbarNotificationsList/NavbarNotificationsList";

import s from "./NavbarShowNotificationsButton.module.scss";

export const NavbarShowNotificationsButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const trigger = (
    <Button onClick={toggleDrawer} theme="clear">
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <div>
      <BrowserView>
        <Popover direction="bottom left" trigger={trigger}>
          <NavbarNotificationsList className={s.notifications} />
        </Popover>
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

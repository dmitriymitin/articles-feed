import React from 'react';
import { useSelector } from 'react-redux';

import { Avatar } from "@/shared/ui/Avatar";
import { Icon } from "@/shared/ui/Icon";
import { Dropdown } from '@/shared/ui/Popups';
import { DropdownItem } from "@/shared/ui/Popups/components/Dropdown/Dropdown";
import { Trans } from "@/shared/ui/Translate";

import {
  getRouteAdmin,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';
import UserIcon from "@/shared/assets/icons/user-filled.svg";

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
} from '@/entities/User';

import { useLogout } from '@/features/auth';

export const NavbarUserMenu = () => {
  const { logout } = useLogout()

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  if (!authData) {
    return <></>;
  }

  const isAdminPanelAvailable = isAdmin || isManager;
  const items: DropdownItem[] = [
    {
      content: <Trans>Админка</Trans>,
      href: getRouteAdmin(),
      hide: !isAdminPanelAvailable
    },
    {
      content: <Trans>Настройки</Trans>,
      href: getRouteSettings(),
    },
    {
      content: <Trans>Профиль</Trans>,
      href: getRouteProfile(authData.id),
    },
    {
      content: <Trans>Выйти</Trans>,
      onClick: logout,
    },
  ];

  return (
    <Dropdown
      direction="bottom left"
      items={items}
      trigger={
        <Avatar
          fallbackInverted
          size={30}
          src={authData.avatar}
          errorFallback={(
            <Icon
              inverted
              width={30}
              height={30}
              Svg={UserIcon}
            />
          )}
        />
      }
    />
  );
};

import React from 'react';
import { useSelector } from 'react-redux';

import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import { DropdownItem } from '@/shared/ui/redesigned/Popups/components/Dropdown/Dropdown';
import { Trans } from '@/shared/ui/Translate';

import { ToggleFeatures } from '@/shared/lib/features';
import {
  getRouteAdmin,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';

import { getUserAuthData, isUserAdmin, isUserManager } from '@/entities/user';

import { useLogout } from '@/features/auth';

export const NavbarUserMenu = () => {
  const { logout } = useLogout();

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  if (!authData) {
    return null;
  }

  const items: DropdownItem[] = [
    ...(isAdmin || isManager
      ? [
          {
            content: <Trans>Админка</Trans>,
            href: getRouteAdmin(),
          },
        ]
      : []),
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          direction="bottom left"
          items={items}
          trigger={<Avatar size={40} src={authData.avatar} />}
        />
      }
      off={
        <DropdownDeprecated
          direction="bottom left"
          items={items}
          trigger={
            <AvatarDeprecated
              fallbackInverted
              size={30}
              src={authData.avatar}
            />
          }
        />
      }
    />
  );
};

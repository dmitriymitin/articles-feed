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

import { Profile } from "@/entities/Profile";
import {
  isUserAdmin,
  isUserManager,
} from '@/entities/User';

import { useLogout } from '@/features/auth';

interface NavbarUserMenuProps {
  profileId: Profile['id']
  profileAvatar: Profile['avatar']
}

export const NavbarUserMenu = (props: NavbarUserMenuProps) => {
  const { profileId, profileAvatar } = props;

  const { logout } = useLogout()

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);

  const items: DropdownItem[] = [
    {
      content: <Trans>Админка</Trans>,
      href: getRouteAdmin(),
      show: isAdmin || isManager
    },
    {
      content: <Trans>Настройки</Trans>,
      href: getRouteSettings(),
    },
    {
      content: <Trans>Профиль</Trans>,
      href: getRouteProfile(profileId),
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
          src={profileAvatar}
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

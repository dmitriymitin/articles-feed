import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Dropdown as DropdownDeprecated } from '@/shared/ui/deprecated/Popups';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Dropdown } from '@/shared/ui/redesigned/Popups';

import { ToggleFeatures } from '@/shared/lib/features';
import {
  getRouteAdmin,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';

import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/user';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const authData = useSelector(getUserAuthData);

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  const items = [
    ...(isAdminPanelAvailable
      ? [
          {
            content: t('Админка'),
            href: getRouteAdmin(),
          },
        ]
      : []),
    {
      content: t('Настройки'),
      href: getRouteSettings(),
    },
    {
      content: t('Профиль'),
      href: getRouteProfile(authData.id),
    },
    {
      content: t('Выйти'),
      onClick: onLogout,
    },
  ];

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Dropdown
          className={className}
          direction="bottom left"
          items={items}
          trigger={<Avatar size={40} src={authData.avatar} />}
        />
      }
      off={
        <DropdownDeprecated
          className={className}
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

import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';

import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { getRouteArticleCreate } from '@/shared/const/router';

import { getUserAuthData } from '@/entities/user';

import { NavbarAuthButton } from '../NavbarAuthButton/NavbarAuthButton';
import { NavbarShowNotificationsButton } from '../NavbarShowNotificationsButton/NavbarShowNotificationsButton';
import { NavbarUserMenu } from '../NavbarUserMenu/NavbarUserMenu';

import s from './Navbar.module.scss';

const NavbarWrapper = ({ children }: PropsWithChildren) => {
  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    on: () => s.NavbarRedesigned,
    off: () => s.Navbar,
  });

  return <header className={mainClass}>{children}</header>;
};

export const Navbar = () => {
  const authData = useSelector(getUserAuthData);

  if (!authData) {
    return (
      <NavbarWrapper>
        <NavbarAuthButton />
      </NavbarWrapper>
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <NavbarWrapper>
          <Flex gap="16" className={s.actions}>
            <NavbarShowNotificationsButton />
            <NavbarUserMenu />
          </Flex>
        </NavbarWrapper>
      }
      off={
        <NavbarWrapper>
          <TextDeprecated
            className={s.appName}
            title="DM App"
            theme="inverted"
          />
          <AppLinkDeprecated
            to={getRouteArticleCreate()}
            theme="secondary"
            className={s.createBtn}
          >
            Создать статью
          </AppLinkDeprecated>
          <Flex gap="16" className={s.actions} align="center">
            <NavbarShowNotificationsButton />
            <NavbarUserMenu />
          </Flex>
        </NavbarWrapper>
      }
    />
  );
};

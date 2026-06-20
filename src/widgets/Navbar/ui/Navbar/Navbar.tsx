import React from "react";
import { useSelector } from "react-redux";

import { AppLink } from "@/shared/ui/AppLink";
import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";

import { getRouteArticleCreate } from "@/shared/const/router";

import { getUserAuthData } from "@/entities/User";

import { NavbarAuthButton } from '../NavbarAuthButton/NavbarAuthButton';
import { NavbarShowNotificationsButton } from '../NavbarShowNotificationsButton/NavbarShowNotificationsButton';
import { NavbarUserMenu } from '../NavbarUserMenu/NavbarUserMenu';

import s from "./Navbar.module.scss";

const NavbarWrapper = ({ children }) => (
  <header className={s.Navbar}>
    {children}
  </header>
)

export const Navbar = () => {
  const authData = useSelector(getUserAuthData);

  if (!authData) {
    return (
      <NavbarWrapper>
        <NavbarAuthButton />
      </NavbarWrapper>
    )
  }

  return (
    <NavbarWrapper>
      <Text
        className={s.appName}
        title="DM App"
        theme='inverted'
      />
      <AppLink
        to={getRouteArticleCreate()}
        theme='secondary'
        className={s.createBtn}
      >
        Создать статью
      </AppLink>
      <Flex gap='16' className={s.actions}>
        <NavbarShowNotificationsButton />
        <NavbarUserMenu profileId={authData.id} profileAvatar={authData.avatar} />
      </Flex>
    </NavbarWrapper>
  );
};

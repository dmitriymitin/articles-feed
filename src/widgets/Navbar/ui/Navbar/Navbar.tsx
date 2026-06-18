import React from "react";
import { useSelector } from "react-redux";

import { AppLink } from "@/shared/ui/AppLink";
import { Text } from "@/shared/ui/Text";

import { getRouteArticleCreate } from "@/shared/const/router";

import { getUserAuthData } from "@/entities/User";

import { NavbarAuthButton } from '../NavbarAuthButton/NavbarAuthButton';

import s from "./Navbar.module.scss";

export const Navbar = () => {
  const authData = useSelector(getUserAuthData);

  return (
    <header className={s.Navbar}>
      {authData && (
        <>
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
        </>
      )}
      <NavbarAuthButton />
    </header>
  );
};

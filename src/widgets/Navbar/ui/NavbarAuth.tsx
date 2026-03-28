import React from "react";

import { Button } from "@/shared/ui/Button";
import { Trans } from "@/shared/ui/Translate";

import s from "./Navbar.module.scss";

import { userActions } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

interface NavbarAuthProps {}

export const NavbarAuth = (props: NavbarAuthProps) => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userActions.logout());
  };

  return (
    <Button className={s.links} theme="clearInverted" onClick={logout}>
      <Trans>Выйти</Trans>
    </Button>
  );
};

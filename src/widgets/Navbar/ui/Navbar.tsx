import React from "react";
import { useSelector } from "react-redux";

import { getUserAuthData } from "@/entities/User";

import { NavbarAuth } from "./NavbarAuth";
import { NavbarNoAuth } from "./NavbarNoAuth";

import s from "./Navbar.module.scss";

interface NavbarProps {}

export const Navbar = (props: NavbarProps) => {
  const authData = useSelector(getUserAuthData);

  return (
    <div className={s.Navbar}>
      {authData ? <NavbarAuth /> : <NavbarNoAuth />}
    </div>
  );
};

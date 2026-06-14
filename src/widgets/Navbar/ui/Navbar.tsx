import React from "react";

import { NavbarAuth } from "./NavbarAuth";

import s from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <div className={s.Navbar}>
      <NavbarAuth />
    </div>
  );
};

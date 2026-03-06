import React from 'react';
import {cn} from "shared/lib/classNames/classNames";
import {AppLink as AppLinkBase, AppLinkProps as AppLinkBaseProps} from "shared/ui/AppLink";
import s from './Navbar.module.scss'

const AppLink = (props: AppLinkBaseProps) => <AppLinkBase theme='secondary' {...props} />


interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props

  return (
    <div className={cn(s.Navbar, className)}>
      <div className={s.links}>
        <AppLink to="/" className={s.mainLink}>
          Главная
        </AppLink>
        <AppLink to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};


import React, { useCallback, useState } from "react";
import { cn } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import s from "./Navbar.module.scss";
import { LoginModal } from "../../../features/AuthByUsername";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={cn(s.Navbar, className)}>
      <Button className={s.links} theme="clearInverted" onClick={onToggleModal}>
        Войти
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
    </div>
  );
};

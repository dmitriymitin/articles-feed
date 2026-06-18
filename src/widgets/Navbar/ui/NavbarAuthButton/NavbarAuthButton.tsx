import React, { useCallback, useState } from 'react';

import { AuthButton } from "@/features/auth";
import { LoginModal } from "@/features/authByUsername";

import s from '../Navbar/Navbar.module.scss';

export const NavbarAuthButton = () => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <>
      <AuthButton className={s.links} onLogin={onToggleModal} />
      <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
    </>
  );
};

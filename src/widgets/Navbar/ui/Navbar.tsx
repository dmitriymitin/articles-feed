import React, {useCallback, useState} from 'react';
import {cn} from "shared/lib/classNames/classNames";
import {Button} from "shared/ui/Button";
import {Modal} from "shared/ui/Modal";
import s from './Navbar.module.scss'


interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

  return (
    <div className={cn(s.Navbar, className)}>
      <Button className={s.links} theme='clearInverted' onClick={onToggleModal}>Войти</Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co
        mmodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese
        runt mollit anim id est laborum
      </Modal>
    </div>
  );
};


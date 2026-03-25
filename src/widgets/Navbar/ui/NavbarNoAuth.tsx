import React, { Fragment, useCallback, useState } from "react";
import { Button } from "shared/ui/Button";
import { Trans } from "shared/ui/Translate";
import { LoginModal } from "features/AuthByUsername";

import s from "./Navbar.module.scss";

interface NavbarNoAuthProps {}

export const NavbarNoAuth = (props: NavbarNoAuthProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <>
      <Button className={s.links} theme="clearInverted" onClick={onToggleModal}>
        <Trans>Войти</Trans>
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onToggleModal} />
    </>
  );
};

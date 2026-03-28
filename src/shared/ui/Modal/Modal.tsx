import React, { Fragment, memo, ReactNode } from "react";

import { cn } from "@/shared/lib/classNames/classNames";
import { useModal } from "@/shared/lib/hooks/useModal";

import { Overlay } from "../Overlay";
import { Portal } from "../Portal";

import s from "./Modal.module.scss";

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

const _Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

  const cls = cn(
    s.Modal,
    s.modalOld,
    {
      [s.opened]: isOpen,
      [s.isClosing]: isClosing,
    },
    className
  );

  if (lazy && !isMounted) {
    return null;
  }

  /** isOpen ? () : <></> нужен для корретной работы дестроя редюсеров
   * {@link DynamicModuleLoader}
   * */
  return isOpen ? (
    <Portal element={document.getElementById("app") ?? document.body}>
      <div className={cls}>
        <Overlay onClick={close} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  ) : (
    <></>
  );
};

export const Modal = memo(_Modal);

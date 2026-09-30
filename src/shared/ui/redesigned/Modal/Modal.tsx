import React, { ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import { toggleFeatures } from '@/shared/lib/features';
import { useModal } from '@/shared/lib/hooks/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import { Overlay } from '../Overlay';
import { Portal } from '../Portal';

import s from './Modal.module.scss';

export interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;

  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  });

  const { theme } = useTheme();

  if (lazy && !isMounted) {
    return null;
  }

  /** isOpen ? () : <></> нужен для корретной работы дестроя редюсеров
   * {@link DynamicModuleLoader}
   * */
  return isOpen ? (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div
        className={cn(
          s.Modal,
          {
            [s.opened]: isOpen,
            [s.isClosing]: isClosing,
          },
          className,
          theme,
          'app_modal',
          toggleFeatures({
            name: 'isAppRedesigned',
            on: () => s.modalNew,
            off: () => s.modalOld,
          }),
        )}
      >
        <Overlay onClick={close} />
        <div className={s.content}>{children}</div>
      </div>
    </Portal>
  ) : (
    <></>
  );
};

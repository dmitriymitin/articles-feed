import { Suspense } from 'react';

import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Modal, ModalProps } from '@/shared/ui/redesigned/Modal';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps extends Pick<ModalProps, 'isOpen'> {
  onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<LoaderDeprecated />}>
        <LoginFormAsync onLogin={onClose} />
      </Suspense>
    </Modal>
  );
};

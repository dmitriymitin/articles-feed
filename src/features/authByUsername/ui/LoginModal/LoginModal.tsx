import { Suspense } from "react";

import { Loader } from "@/shared/ui/Loader";
import { Modal, ModalProps } from "@/shared/ui/Modal";

import { LoginFormAsync } from "../LoginForm/LoginForm.async";

interface LoginModalProps extends Pick<ModalProps, "isOpen" | "onClose"> {}

export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  );
};

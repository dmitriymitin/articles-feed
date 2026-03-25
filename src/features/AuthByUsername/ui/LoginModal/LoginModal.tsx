import { Modal, ModalProps } from "shared/ui/Modal";
import s from "./LoginModal.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps extends Pick<ModalProps, "isOpen" | "onClose"> {}

export const LoginModal = (props: LoginModalProps) => {
  const { isOpen, onClose } = props;

  return (
    <Modal className={s.LoginModal} isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm />
    </Modal>
  );
};

import { cn } from "shared/lib/classNames/classNames";
import { Modal, ModalProps } from "shared/ui/Modal";
import s from "./LoginModal.module.scss";
import { LoginForm } from "../LoginForm/LoginForm";

interface LoginModalProps extends Pick<ModalProps, "isOpen" | "onClose"> {
  className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      className={cn(s.LoginModal, className)}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </Modal>
  );
};

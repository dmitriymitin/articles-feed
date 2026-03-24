import { cn } from "shared/lib/classNames/classNames";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import s from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;

  return (
    <div className={cn(s.LoginForm, className)}>
      <Input
        type="text"
        className={s.input}
        placeholder="Введите username"
        autofocus
      />
      <Input type="text" className={s.input} placeholder="Введите пароль" />
      <Button className={s.loginBtn}>Войти</Button>
    </div>
  );
};

import { useSelector } from "react-redux";

import { LoginButton } from "../LoginButton/LoginButton";
import { LogoutButton } from "../LogoutButton/LogoutButton";

import { getUserAuthData } from "@/entities/User";

interface AuthButtonProps {
  className?: string;
  onLogin?: () => void;
}

export const AuthButton = (props: AuthButtonProps) => {
  const { className, onLogin } = props;
  const authData = useSelector(getUserAuthData);

  return (
    <>
      {authData ? <LogoutButton className={className} /> : <LoginButton className={className} onLogin={onLogin} />}
    </>
  );
};

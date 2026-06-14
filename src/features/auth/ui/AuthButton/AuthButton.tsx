import { useSelector } from "react-redux";

import { getUserAuthData } from "@/entities/User";

import { LoginButton } from "../LoginButton/LoginButton";
import { LogoutButton } from "../LogoutButton/LogoutButton";

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

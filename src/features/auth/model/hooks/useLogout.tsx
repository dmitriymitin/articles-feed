import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { userActions } from "@/entities/User";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(userActions.logout());
  };

  return {
    logout
  }
}

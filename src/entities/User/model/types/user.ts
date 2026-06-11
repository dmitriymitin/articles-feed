import { UserRole } from "../consts/userConsts";

export interface User {
  id: string;
  username: string;
  roles?: UserRole[];
}

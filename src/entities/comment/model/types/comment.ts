import { User } from "../../../user/@x/Comment";

export interface Comment {
  id: string;
  user: User;
  text: string;
}

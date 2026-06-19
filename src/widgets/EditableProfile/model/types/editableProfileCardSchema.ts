import { Profile } from "@/entities/Profile";

import { ValidateProfileError } from "../consts/consts";

export type ProfileSchemaForm = Pick<
  Profile,
  "lastname" | "avatar" | "first" | "username" | "city" | "age" | "country" | 'currency'
>

export interface ProfileSchema {
  data?: Profile;
  form?: ProfileSchemaForm;
  isLoading: boolean;
  readonly: boolean;
  error?: string;
  validateErrors?: ValidateProfileError[];
}

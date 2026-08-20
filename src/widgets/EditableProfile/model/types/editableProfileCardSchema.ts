import { Profile } from "@/entities/profile";

import { ValidateProfileError } from "../consts/editableProfileConsts";

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

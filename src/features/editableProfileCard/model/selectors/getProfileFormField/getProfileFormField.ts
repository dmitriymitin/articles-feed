import { StateSchema } from "@/app/providers/StoreProvider";

import {
  ProfileSchemaForm,
} from "../../types/editableProfileCardSchema";

export const getProfileFormField =
  <K extends keyof ProfileSchemaForm>(field: K) =>
    (state: StateSchema): ProfileSchemaForm[K] =>
      state?.profile?.form?.[field];

import { LoginSchemaInputFields } from "../../types/LoginSchema";

import { StateSchema } from "@/app/providers/StoreProvider";

export const getLoginInputField =
  (field: keyof LoginSchemaInputFields) => (state: StateSchema) =>
    state?.loginForm?.[field] || "";

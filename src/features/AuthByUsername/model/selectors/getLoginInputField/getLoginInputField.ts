import { StateSchema } from "@/app/providers/StoreProvider";

import { loginSliceInitialState } from "../../slice/loginSlice";
import { LoginSchemaInputFields } from "../../types/LoginSchema";

export const getLoginInputField =
  (field: keyof LoginSchemaInputFields) => (state: StateSchema) =>
    state?.loginForm?.[field] || loginSliceInitialState[field];

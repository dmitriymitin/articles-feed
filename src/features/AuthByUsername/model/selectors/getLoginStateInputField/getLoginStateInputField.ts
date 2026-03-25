import { StateSchema } from "@/app/providers/StoreProvider";
import { LoginSchemaInputFields } from "../../types/LoginSchema";

export const getLoginStateInputField =
  (field: keyof LoginSchemaInputFields) => (state: StateSchema) =>
    state?.loginForm[field];

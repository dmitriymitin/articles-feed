import { StateSchema } from "@/app/providers/StoreProvider";

import { loginSliceInitialState } from "../../slice/loginSlice";
import { LoginSchema } from "../../types/LoginSchema";

export const getLoginField =
  <K extends keyof LoginSchema>(field: K) =>
    (state: StateSchema): LoginSchema[K] =>
      state?.loginForm?.[field] ?? loginSliceInitialState[field];

import { StateSchema } from "@/app/providers/StoreProvider";

import { loginSliceInitialState } from "../../slice/loginSlice";

export const getLoginError = (state: StateSchema) =>
  state?.loginForm?.error || loginSliceInitialState.error;

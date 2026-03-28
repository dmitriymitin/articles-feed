import { StateSchema } from "@/app/providers/StoreProvider";

import { loginSliceInitialState } from "../../slice/loginSlice";

export const getLoginLoading = (state: StateSchema) =>
  state?.loginForm?.isLoading || loginSliceInitialState.isLoading;

import { StateSchema } from "@/app/providers/StoreProvider";

export const getLoginStateLoading = (state: StateSchema) =>
  state?.loginForm.isLoading;

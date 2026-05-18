import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/StoreProvider";

import { loginByUsername } from "../services/loginByUsername/loginByUsername";
import { LoginSchema } from "../types/LoginSchema";

export const loginSliceInitialState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "loginForm" as keyof StateSchema,
  initialState: loginSliceInitialState,
  reducers: {
    setField: (
      state,
      action: PayloadAction<{
        value: any;
        field: keyof LoginSchema;
      }>
    ) => {
      const { field, value } = action.payload;

      // @ts-ignore
      state[field] = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

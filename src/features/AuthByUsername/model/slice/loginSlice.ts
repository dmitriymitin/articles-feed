import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { loginByUsername } from "../services/loginByUsername/loginByUsername";
import { LoginSchema, LoginSchemaInputFields } from "../types/LoginSchema";

import { StateSchema } from "@/app/providers/StoreProvider";

const initialState: LoginSchema = {
  username: "",
  password: "",
  isLoading: false,
};

export const loginSlice = createSlice({
  name: "loginForm" as keyof StateSchema,
  initialState,
  reducers: {
    setInputField: (
      state,
      action: PayloadAction<{
        value: string;
        field: keyof LoginSchemaInputFields;
      }>
    ) => {
      const { field, value } = action.payload;

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

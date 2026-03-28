import { createSlice } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/StoreProvider";

import { ProfileSchema } from "../types/profile";

const initialStateProfileSlice: ProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: "profile" as keyof StateSchema,
  initialState: initialStateProfileSlice,
  reducers: {},
});

export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

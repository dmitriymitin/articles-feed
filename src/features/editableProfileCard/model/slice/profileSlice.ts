import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/StoreProvider";

import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { ProfileSchema } from "../types/editableProfileCardSchema";

import { Profile } from "@/entities/Profile";

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchProfileData.fulfilled,
        (state, action: PayloadAction<Profile>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

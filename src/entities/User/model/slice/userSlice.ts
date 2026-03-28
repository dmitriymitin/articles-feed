import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User, UserSchema } from "../types/user";

import { StateSchema } from "@/app/providers/StoreProvider";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

const initialState: UserSchema = {
  authData: undefined,
};

export const userSlice = createSlice({
  name: "user" as keyof StateSchema,
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const localStorageUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (localStorageUser) {
        state.authData = JSON.parse(localStorageUser);
      }
    },
    logout: (state) => {
      state.authData = initialState?.authData;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

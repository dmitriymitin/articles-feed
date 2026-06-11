import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StateSchema } from "@/app/providers/StoreProvider";

import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

import { User, UserSchema } from "../types/user";

const initialStateUserSlice: UserSchema = {
  authData: undefined,
  _inited: false,
};

export const userSlice = createSlice({
  name: "user" as keyof StateSchema,
  initialState: initialStateUserSlice,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const localStorageUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);

      if (localStorageUser) {
        state.authData = JSON.parse(localStorageUser);
      }

      state._inited = true;
    },
    logout: (state) => {
      state.authData = initialStateUserSlice?.authData;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

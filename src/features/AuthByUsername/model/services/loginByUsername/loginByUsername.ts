
import { createAsyncThunk } from "@reduxjs/toolkit";

import { ThunkConfig } from "@/app/providers/StoreProvider/config/StateSchema";

import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

import type { User } from "@/entities/User";
import { userActions } from "@/entities/User";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>("login/loginByUserName", async (authData, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI
  const { username, password } = authData;

  try {
    const response = await extra.api.post("/login", {
      username,
      password,
    });

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    extra.navigate?.('/about')

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("Вы ввели неверный логин или пароль");
  }
});

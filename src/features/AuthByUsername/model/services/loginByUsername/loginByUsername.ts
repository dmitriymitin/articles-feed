import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { userActions } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localstorage";

import type { User } from "@/entities/User";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>("login/loginByUserName", async (authData, thunkAPI) => {
  try {
    const { username, password } = authData;

    const response = await axios.post("http://localhost:8000/login", {
      username,
      password,
    });

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("Вы ввели неверный логин или пароль");
  }
});

import { StateSchema } from "@/app/providers/StoreProvider";

import { loginSliceInitialState } from "../../slice/loginSlice";

import { getLoginField } from "./getLoginField";

describe("getLoginField.test", () => {
  test("should return username value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "username123",
      },
    };
    expect(getLoginField("username")(state as StateSchema)).toEqual(
      "username123"
    );
  });

  test("should work with empty username state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginField("username")(state as StateSchema)).toEqual(
      loginSliceInitialState.username
    );
  });

  test("should return password value", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "password123",
      },
    };
    expect(getLoginField("password")(state as StateSchema)).toEqual(
      "password123"
    );
  });

  test("should work with empty password state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginField("password")(state as StateSchema)).toEqual(
      loginSliceInitialState.password
    );
  });
});

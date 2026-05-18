import { StateSchema } from "@/app/providers/StoreProvider";

import { getProfileFormField } from "./getProfileFormField";

describe("getProfileFormField.test", () => {
  test("should return username value", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          username: 'username123',
        },
      },
    };
    expect(getProfileFormField("username")(state as StateSchema)).toEqual(
      "username123"
    );
  });

  test("should return first value", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          first: 'first123',
        },
      },
    };
    expect(getProfileFormField("first")(state as StateSchema)).toEqual(
      "first123"
    );
  });

  test("should return age value", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: {
          age: 123,
        },
      },
    };
    expect(getProfileFormField("age")(state as StateSchema)).toEqual(
      123
    );
  });
});

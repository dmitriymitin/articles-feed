import { StateSchema } from "@/app/providers/StoreProvider";

import { profileTestData } from "@/entities/Profile/mock";

import { getProfileForm } from "./getProfileForm";

describe("getProfileForm.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: profileTestData,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(profileTestData);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});

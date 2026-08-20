import { Country } from "../country/@x/Profile";
import { Currency } from "../currency/@x/Profile";

import { Profile } from "./model/types/profile";

export const profileTestData: Profile = {
  id: "123",
  username: "admin",
  age: 22,
  country: Country.Armenia,
  lastname: "dm",
  first: "asd",
  city: "asf",
  currency: Currency.USD,
  avatar: "123",
};

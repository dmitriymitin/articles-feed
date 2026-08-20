import { Country } from "../../../country/@x/Profile";
import { Currency } from "../../../currency/@x/Profile";

export interface Profile {
  id: string;
  first?: string;
  lastname?: string;
  age?: number;
  city?: string;
  username?: string;
  avatar?: string;
  currency?: Currency;
  country?: Country;
}

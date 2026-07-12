import { Country } from "@/entities/Country/@x/Profile";
import { Currency } from "@/entities/Currency/@x/Profile";

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

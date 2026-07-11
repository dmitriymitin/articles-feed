import { createContext, Dispatch, SetStateAction } from "react";

import { Theme } from "@/shared/const/theme";

export interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<ThemeContextProps>({} as never);

export const LOCAL_STORAGE_THEME_KEY = "theme";

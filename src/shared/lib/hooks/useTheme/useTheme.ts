import { useContext } from "react";

import { Theme } from "@/shared/const/theme";

import {
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "../../context/ThemeContext";

interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Возвращает текущую тему и функцию переключения темы.
 * При переключении обновляет ThemeContext, className у body и значение в localStorage.
 */
export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;
        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return {
    theme,
    toggleTheme,
  };
}

import { memo } from "react";

import { Theme, useTheme } from "@/app/providers/ThemeProvider";

import { Button } from "@/shared/ui/Button";

import { cn } from "@/shared/lib/classNames/classNames";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import LightIcon from "@/shared/assets/icons/theme-light.svg";

import s from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const _ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  const cls = cn(s.ThemeSwitcher, className);

  return (
    <Button theme="clear" onClick={toggleTheme} className={cls}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export const ThemeSwitcher = memo(_ThemeSwitcher);

import {Button} from "shared/ui/Button";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {cn} from "shared/lib/classNames/classNames";
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const _ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme()

  const cls = cn(
    s.ThemeSwitcher,
    className
  );

  return (
    <Button theme='clear' onClick={toggleTheme} className={cls}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};

export const ThemeSwitcher = _ThemeSwitcher

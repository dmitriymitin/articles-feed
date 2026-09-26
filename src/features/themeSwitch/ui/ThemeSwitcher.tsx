import { memo } from 'react';

import { Button } from '@/shared/ui/Button';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';

import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';

import { saveJsonSettings } from '@/entities/user';

interface ThemeSwitcherProps {
  className?: string;
}

export const _ThemeSwitcher = (props: ThemeSwitcherProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = () => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<Icon Svg={ThemeIcon} clickable onClick={onToggleHandler} />}
      off={
        <Button theme="clear" onClick={onToggleHandler}>
          <IconDeprecated
            Svg={ThemeIconDeprecated}
            width={40}
            height={40}
            inverted
          />
        </Button>
      }
    />
  );
};

export const ThemeSwitcher = memo(_ThemeSwitcher);

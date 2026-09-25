import { useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { Flex } from '@/shared/ui/Flex';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';

import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

import { LangSwitcher } from '@/features/langSwitch';
import { ThemeSwitcher } from '@/features/themeSwitch';

import { useSidebarItems } from '../../model/selectors/useSidebarItems';

import { SidebarItem } from '../SidebarItem/SidebarItem';

import s from './Sidebar.module.scss';

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemsList = useSidebarItems();

  const itemsList = sidebarItemsList.map((item) => (
    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
  ));

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <section
          data-testid="sidebar"
          className={cn(s.SidebarRedesigned, {
            [s.collapsedRedesigned]: collapsed,
          })}
        >
          <AppLogo size={collapsed ? 30 : 50} className={s.appLogo} />
          <Flex vertical role="navigation" gap="8" className={s.items}>
            {itemsList}
          </Flex>
          <Icon
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={s.collapseBtn}
            Svg={ArrowIcon}
            clickable
          />
          <div className={s.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} className={s.lang} />
          </div>
        </section>
      }
      off={
        <section
          data-testid="sidebar"
          className={cn(s.Sidebar, {
            [s.collapsed]: collapsed,
          })}
        >
          <Button
            data-testid="sidebar-toggle"
            onClick={onToggle}
            className={s.collapseBtn}
            theme="backgroundInverted"
            size="l"
            square
          >
            {collapsed ? '>' : '<'}
          </Button>
          <Flex role="navigation" vertical gap="8" className={s.items}>
            {itemsList}
          </Flex>
          <div className={s.switchers}>
            <ThemeSwitcher />
            <LangSwitcher short={collapsed} className={s.lang} />
          </div>
        </section>
      }
    />
  );
};

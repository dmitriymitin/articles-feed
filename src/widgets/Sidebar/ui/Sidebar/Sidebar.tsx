import { useState } from "react";

import { Button } from "@/shared/ui/Button";

import { LangSwitcher } from "@/widgets/LangSwitcher";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher";

import { cn } from "@/shared/lib/classNames/classNames";

import { SidebarItemsList } from "./SidebarItemsList";

import s from "./Sidebar.module.scss";

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  // test
  const cls = cn(s.Sidebar, {
    [s.collapsed]: collapsed,
  });

  return (
    <aside data-testid="sidebar" className={cls}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={s.collapseBtn}
        theme="backgroundInverted"
        size="l"
        square
      >
        {collapsed ? ">" : "<"}
      </Button>
      <SidebarItemsList collapsed={collapsed} />
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={s.lang} />
      </div>
    </aside>
  );
};

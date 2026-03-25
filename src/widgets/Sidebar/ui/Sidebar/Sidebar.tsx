import { cn } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { Button } from "shared/ui/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import s from "./Sidebar.module.scss";
import { useSidebarItems } from "../../model/selectors/useSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSidebarItems();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

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
      <div className={s.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem item={item} collapsed={collapsed} key={item.path} />
        ))}
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={s.lang} />
      </div>
    </aside>
  );
};

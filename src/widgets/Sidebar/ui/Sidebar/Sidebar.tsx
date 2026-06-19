import { useState } from "react"

import { Button } from "@/shared/ui/Button";
import { Flex } from "@/shared/ui/Flex";

import { cn } from "@/shared/lib/classNames/classNames";

import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher";

import { useSidebarItems } from "../../model/selectors/useSidebarItems";

import { SidebarItem } from "../SidebarItem/SidebarItem";

import s from "./Sidebar.module.scss";

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItemsList = useSidebarItems();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const cls = cn(
    s.Sidebar,
    {
      [s.collapsed]: collapsed,
    }
  );

  return (
    <section data-testid="sidebar" className={cls}>
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
      <Flex role='navigation' vertical gap='8' className={s.items}>
        {sidebarItemsList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </Flex>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={s.lang} />
      </div>
    </section>
  );
};

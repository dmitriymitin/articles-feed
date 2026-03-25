import { AppLink } from "@/shared/ui/AppLink";

import { cn } from "@/shared/lib/classNames/classNames";
import { Trans } from "@/shared/ui/Translate";
import s from "./SidebarItem.module.scss";
import { SidebarItemType } from "../../model/types/sidebar";

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item, collapsed } = props;

  if (item.authOnly) {
    return null;
  }

  return (
    <AppLink
      theme="secondary"
      to={item.path}
      className={cn(s.item, {
        [s.collapsed]: collapsed,
      })}
    >
      <item.Icon className={s.icon} />
      <span className={s.link}>
        <Trans>{item.text}</Trans>
      </span>
    </AppLink>
  );
};

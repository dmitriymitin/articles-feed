import { Flex } from "@/shared/ui/Flex";

import { useSidebarItems } from "../../model/selectors/useSidebarItems";

import { SidebarItem } from "../SidebarItem/SidebarItem";

import s from "./Sidebar.module.scss";

interface SidebarItemsListProps {
  collapsed: boolean;
}

export const SidebarItemsList = (props: SidebarItemsListProps) => {
  const { collapsed } = props;

  const sidebarItemsList = useSidebarItems();

  return (
    <Flex role='navigation' vertical gap='8' className={s.items}>
      {sidebarItemsList.map((item) => (
        <SidebarItem item={item} collapsed={collapsed} key={item.path} />
      ))}
    </Flex>
  );
};

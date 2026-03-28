import { SidebarItemType } from "../types/sidebar";

import MainIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/Info.svg";
import { RoutePath } from "@/shared/config/routeConfig/routeConfig";

const sidebarItemsList: SidebarItemType[] = [
  {
    text: "Главная",
    path: RoutePath.main,
    Icon: MainIcon,
  },
  {
    text: "О сайте",
    path: RoutePath.about,
    Icon: AboutIcon,
  },
];

export const useSidebarItems = () => {
  return sidebarItemsList;
};

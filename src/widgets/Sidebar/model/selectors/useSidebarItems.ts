import { RoutePath } from "@/shared/config/routeConfig/routeConfig";

import MainIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/Info.svg";

import { SidebarItemType } from "../types/sidebar";

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

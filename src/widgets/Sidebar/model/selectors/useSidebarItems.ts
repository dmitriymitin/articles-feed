import { AppRoutes, RoutePath } from "@/shared/config/routeConfig/routeConfig";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";

import { SidebarItemType } from "../types/sidebar";

const sidebarItemsList: SidebarItemType[] = [
  {
    text: "Главная",
    path: RoutePath[AppRoutes.MAIN],
    Icon: MainIcon,
  },
  {
    text: "О сайте",
    path: RoutePath[AppRoutes.ABOUT],
    Icon: AboutIcon,
  },
  {
    text: "Профиль",
    path: RoutePath[AppRoutes.PROFILE],
    Icon: ProfileIcon,
  },
];
export const useSidebarItems = () => {
  return sidebarItemsList;
};

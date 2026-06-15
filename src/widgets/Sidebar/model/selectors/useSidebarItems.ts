import { useSelector } from "react-redux";

import {
  getRouteAbout,
  getRouteArticles,
  getRouteMain,
  getRouteProfile,
} from "@/shared/const/router";
import AboutIcon from "@/shared/assets/icons/about-20-20.svg";
import ArticleIcon from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from "@/shared/assets/icons/main-20-20.svg";
import ProfileIcon from "@/shared/assets/icons/profile-20-20.svg";

import { getUserAuthData } from "@/entities/User";

import { SidebarItemType } from "../types/sidebar";

export const useSidebarItems = () => {
  const authData = useSelector(getUserAuthData);

  const sidebarItemsList: SidebarItemType[] = [
    {
      text: "Главная",
      path: getRouteMain(),
      Icon: MainIcon,
    },
    {
      text: "О сайте",
      path: getRouteAbout(),
      Icon: AboutIcon,
    }
  ];

  if (authData) {
    sidebarItemsList.push(
      {
        text: "Профиль",
        Icon: ProfileIcon,
        path: getRouteProfile(authData.id),
        authOnly: true,
      },
      {
        text: 'Статьи',
        Icon: ArticleIcon,
        path: getRouteArticles(),
        authOnly: true,
      },
    )
  }

  return sidebarItemsList;
};

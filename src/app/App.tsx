import React, { PropsWithChildren, Suspense, useEffect } from "react";
import { useSelector } from "react-redux";

import { cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useTheme } from "@/shared/lib/hooks/useTheme/useTheme";

import { getUserInited, userActions } from "@/entities/User";

import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import { PageLoader } from "../widgets/PageLoader";

import { AppRouter } from "./providers/router";

import "./styles/index.scss";

const AppWrapper = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();

  return <div className={cn("app", theme)}>{children}</div>;
};

export const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    if (!inited) {
      dispatch(userActions.initAuthData());
    }
  }, [inited]);

  if (!inited) {
    return <PageLoader />;
  }

  return (
    <AppWrapper>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </AppWrapper>
  );
};

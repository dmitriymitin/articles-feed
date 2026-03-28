import React, { PropsWithChildren, Suspense, useEffect } from "react";

import { AppRouter } from "@/app/providers/router";
import { useTheme } from "@/app/providers/ThemeProvider";

import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

import { cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import "./styles/index.scss";

import { userActions } from "@/entities/User";

const AppWrapper = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();

  return <div className={cn("app", theme)}>{children}</div>;
};

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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

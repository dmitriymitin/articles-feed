import React, { PropsWithChildren, Suspense, useEffect } from "react";

import { AppRouter } from "@/app/providers/router";
import { useTheme } from "@/app/providers/ThemeProvider";

import { cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import "./styles/index.scss";

import { userActions } from "@/entities/User";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

const Wrapper = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();

  return <div className={cn("app", theme)}>{children}</div>;
};

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <Wrapper>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </Wrapper>
  );
};

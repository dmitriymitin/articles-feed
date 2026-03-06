import React, {PropsWithChildren, Suspense} from 'react';
import {useTheme} from "app/providers/ThemeProvider";
import {cn} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

import '../app/styles/index.scss'
import {Sidebar} from "widgets/Sidebar";

const Wrapper = ({children}: PropsWithChildren) => {
  const { theme } = useTheme()

  return (
    <div className={cn('app', theme)}>
      {children}
    </div>
  )
}

export const App = () => {
  return (
    <Wrapper>
      <Suspense fallback="">
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </Wrapper>
  );
};

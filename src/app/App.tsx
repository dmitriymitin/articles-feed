import React, { PropsWithChildren, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { cn } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';

import { getUserInited, initAuthData } from '@/entities/user';

import { Navbar } from '@/widgets/Navbar';
import { PageLoader } from '@/widgets/PageLoader';
import { Sidebar } from '@/widgets/Sidebar';

import { AppLoaderLayout } from '../shared/layouts/AppLoaderLayout';
import { MainLayout } from '../shared/layouts/MainLayout';
import { ToggleFeatures } from '../shared/lib/features';

import { useAppToolbar } from './lib/useAppToolbar';
import { AppRouter } from './providers/router';

import './styles/index.scss';

const AppWrapper = (props: PropsWithChildren) => {
  const { children } = props;

  const { theme } = useTheme();

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={<div className={cn('app_redesigned', theme)}>{children}</div>}
      off={<div className={cn('app', theme)}>{children}</div>}
    />
  );
};

export const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);
  const toolbar = useAppToolbar();

  useEffect(() => {
    if (!inited) {
      dispatch(initAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <AppWrapper>
            <AppLoaderLayout />
          </AppWrapper>
        }
        off={<PageLoader />}
      />
    );
  }

  return (
    <AppWrapper>
      <Suspense fallback="">
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <MainLayout
              header={<Navbar />}
              content={<AppRouter />}
              sidebar={<Sidebar />}
              toolbar={toolbar}
            />
          }
          off={
            <>
              <Navbar />
              <div className="content-page">
                <Sidebar />
                <AppRouter />
              </div>
            </>
          }
        />
      </Suspense>
    </AppWrapper>
  );
};

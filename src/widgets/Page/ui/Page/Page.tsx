import React, { MutableRefObject, PropsWithChildren, UIEvent, useRef } from "react";
import { useLocation } from "react-router-dom";

import { cn } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useAppStore } from "@/shared/lib/hooks/useAppStore/useAppStore";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import { TestProps } from "@/shared/types/tests";

import { getUIScrollByPath } from '../../model/selectors/ui';
import { uiActions } from '../../model/slices/UISlice';

import s from './Page.module.scss'

interface PageProps extends TestProps, PropsWithChildren {
  className?: string;
}

export const Page = (props: PageProps) => {
  const { className, children } = props

  const { pathname } = useLocation();

  const store = useAppStore();
  const dispatch = useAppDispatch()

  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInitialEffect(() => {
    const scrollPosition = getUIScrollByPath(store.getState(), pathname);
    console.log('scrollPosition', scrollPosition)
  }, []);

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: pathname,
      }),
    );
  }, 500);

  return (
    <main
      ref={wrapperRef}
      className={cn(s.Page, className)}
      data-testid={props['data-testid'] ?? 'Page'}
      onScroll={onScroll}
    >
      {children}
    </main>
  );
};

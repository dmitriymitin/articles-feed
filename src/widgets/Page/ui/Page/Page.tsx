import React, { PropsWithChildren } from "react";

import { cn } from "@/shared/lib/classNames/classNames";
import { TestProps } from "@/shared/types/tests";

import s from './Page.module.scss'

interface PageProps extends TestProps, PropsWithChildren {
  className?: string;
}

export const Page = (props: PageProps) => {
  const { className, children } = props
  return (
    <main
      className={cn(s.Page, className)}
      data-testid={props['data-testid'] ?? 'Page'}
    >
      {children}
    </main>
  );
};

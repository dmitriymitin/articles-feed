import { ReactElement } from 'react';

import { cn } from "../../lib/classNames/classNames";

import s from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    content: ReactElement;
    sidebar: ReactElement;
    toolbar?: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { className, content, toolbar, header, sidebar } = props;

  return (
    <div className={cn(s.MainLayout, className)}>
      <div className={s.content}>{content}</div>
      <div className={s.sidebar}>{sidebar}</div>
      <div className={s.rightbar}>
        <div className={s.header}>{header}</div>
        <div className={s.toolbar}>{toolbar}</div>
      </div>
    </div>
  );
};

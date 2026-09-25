import { ReactElement } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import s from './StickyContentLayout.module.scss';

interface StickyContentLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}

export const StickyContentLayout = (props: StickyContentLayoutProps) => {
    const { className, content, left, right } = props;

    return (
      <div className={cn(s.MainLayout, className)}>
          {left && <div className={s.left}>{left}</div>}
          <div className={s.content}>{content}</div>
          {right && <div className={s.right}>{right}</div>}
      </div>
    );
};

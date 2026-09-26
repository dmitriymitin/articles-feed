import { HTMLAttributes, memo, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { Trans } from '../../Translate';

import s from './Card.module.scss';

type CardTheme = 'normal' | 'outlined';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}

const _Card = (props: CardProps) => {
  const { className, children, theme = 'normal', max, ...otherProps } = props;

  return (
    <div
      className={cn(s.Card, { [s.max]: max }, className, s[theme])}
      {...otherProps}
    >
      {typeof children === 'string' ? <Trans>{children}</Trans> : children}
    </div>
  );
};

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Card = memo(_Card);

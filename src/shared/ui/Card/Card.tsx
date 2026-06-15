import { HTMLAttributes, memo, ReactNode } from 'react';

import { cn } from "../../lib/classNames/classNames";

import s from './Card.module.scss';

type CardTheme =
  | "normal"
  | "outlined";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
    max?: boolean;
}

export const Card = memo((props: CardProps) => {
    const {
        className,
        children,
        theme = 'normal',
        max,
        ...otherProps
    } = props;

    return (
        <div
            className={cn(s.Card, { [s.max]: max }, className, s[theme])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

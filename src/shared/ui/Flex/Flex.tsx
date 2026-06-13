import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import { cn } from "../../lib/classNames/classNames";

import s from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap = '4' | '8' | '16' | '24' | '32';

const justifyClasses: Record<FlexJustify, string> = {
    start: s.justifyStart,
    center: s.justifyCenter,
    end: s.justifyEnd,
    between: s.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: s.alignStart,
    center: s.alignCenter,
    end: s.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: s.directionRow,
    column: s.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    4: s.gap4,
    8: s.gap8,
    16: s.gap16,
    24: s.gap24,
    32: s.gap32,
};

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

export interface FlexProps extends DivProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    vertical?: boolean;
    wrap?: FlexWrap;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = "start",
    align = "start",
    vertical = false,
    wrap = "nowrap",
    gap,
    max,
    ...otherProps
  } = props;

  const classNames = cn(
    s.Flex,
    {
        [s.max]: max,
    },
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[vertical ? 'column' : 'row'],
    s[wrap],
    gap && gapClasses[gap]
  )

  return (
    <div
      className={classNames}
      {...otherProps}
    >
      {children}
    </div>
  );
};

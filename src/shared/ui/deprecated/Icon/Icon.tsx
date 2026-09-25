import React, { memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import s from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo((props: IconProps) => {
  const { className, Svg, inverted, ...otherProps } = props;

  return (
    <Svg
      className={cn(inverted ? s.inverted : s.Icon, className)}
      {...otherProps}
    />
  );
});

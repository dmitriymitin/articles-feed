import { CSSProperties, ReactElement, useMemo } from "react";

import { cn } from "@/shared/lib/classNames/classNames";

import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';

import s from './Avatar.module.scss'

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    fallbackInverted?: boolean;
    errorFallback?: ReactElement
}

export const Avatar = ({
  className,
  src,
  size = 100,
  alt,
  fallbackInverted,
  errorFallback,
}: AvatarProps) => {
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size,
      height: size,
    }),
    [size]
  );

  const fallback = <Skeleton width={size} height={size} border="50%" />;

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={styles}
      className={cn(s.Avatar, className)}
    />
  );
};

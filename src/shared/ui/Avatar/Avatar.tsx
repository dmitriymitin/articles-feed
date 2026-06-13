import { CSSProperties, memo } from "react";

import { cn } from "../../lib/classNames/classNames";

import { Image } from "../Image";

import s from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src: string;
    alt: string;
    size?: number;
}

const _Avatar = (props: AvatarProps) => {
  const { className, src, size = 100, alt } = props;

  const styles: CSSProperties = {
    width: size,
    height: size,
  };

  return (
    <Image
      src={src}
      alt={alt}
      style={styles}
      className={cn(s.Avatar, className)}
    />
  );
};

export const Avatar = memo(_Avatar)

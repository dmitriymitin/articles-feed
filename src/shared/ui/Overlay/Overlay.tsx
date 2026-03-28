import { cn } from "@/shared/lib/classNames/classNames";

import s from "./Overlay.module.scss";

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = (props: OverlayProps) => {
  const { className, onClick } = props;

  return <div onClick={onClick} className={cn(s.Overlay, className)} />;
};

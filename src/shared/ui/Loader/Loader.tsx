import "./Loader.scss";

import { cn } from "@/shared/lib/classNames/classNames";

interface LoaderProps {
  className?: string;
}

export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={cn("lds-ellipsis", className)}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

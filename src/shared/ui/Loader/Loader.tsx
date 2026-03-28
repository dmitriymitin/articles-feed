import { cn } from "@/shared/lib/classNames/classNames";

import "./Loader.scss";

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

import { Loader } from "@/shared/ui/Loader";

import { cn } from "@/shared/lib/classNames/classNames";

import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={cn(cls.PageLoader, className)}>
    <Loader />
  </div>
);

import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';

import { cn } from '@/shared/lib/classNames/classNames';

import s from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={cn(s.PageLoader, className)}>
    <LoaderDeprecated />
  </div>
);

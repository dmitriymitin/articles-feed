import { cn } from '@/shared/lib/classNames/classNames';

import './Loader.scss';

interface LoaderProps {
  className?: string;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader = (props: LoaderProps) => {
  const { className } = props;

  return (
    <div className={cn('lds-ellipsis', className)} data-testid="Loader">
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

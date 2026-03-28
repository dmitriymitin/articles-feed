import { Trans } from "@/shared/ui/Translate";

import cls from "./NotFoundPage.module.scss";

import { cn } from "@/shared/lib/classNames/classNames";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <div className={cn(cls.NotFoundPage, className)}>
      <Trans>Страница не найдена</Trans>
    </div>
  );
};

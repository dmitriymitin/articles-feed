import { Trans } from "@/shared/ui/Translate";

import { cn } from "@/shared/lib/classNames/classNames";

import { Page } from "@/widgets/Page";

import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <Page className={cn(cls.NotFoundPage, className)}>
      <Trans>Страница не найдена</Trans>
    </Page>
  );
};

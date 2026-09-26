import { Trans } from '@/shared/ui/redesigned/Translate';

import { cn } from '@/shared/lib/classNames/classNames';

import { Page } from '@/widgets/Page';

import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = (props: NotFoundPageProps) => {
  const { className } = props;

  return (
    <Page data-testid="NotFoundPage" className={cn(s.NotFoundPage, className)}>
      <Trans>Страница не найдена</Trans>
    </Page>
  );
};

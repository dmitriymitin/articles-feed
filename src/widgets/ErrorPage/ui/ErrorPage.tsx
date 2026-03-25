import { cn } from "@/shared/lib/classNames/classNames";
import { Button } from "@/shared/ui/Button";
import { Trans } from "@/shared/ui/Translate";
import s from "./ErrorPage.module.scss";

interface ErrorPageProps {
  className?: string;
}

export const ErrorPage = (props: ErrorPageProps) => {
  const { className } = props;

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={cn(s.ErrorPage, className)}>
      <p>
        <Trans>Произошла непредвиденная ошибка</Trans>
      </p>
      <Button onClick={reloadPage}>
        <Trans>Обновить страницу</Trans>
      </Button>
    </div>
  );
};

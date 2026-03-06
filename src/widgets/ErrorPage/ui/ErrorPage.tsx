import {cn} from "shared/lib/classNames/classNames";
import {Button} from "shared/ui/Button";
import {Trans} from "shared/ui/Translate";
import cls from './ErrorPage.module.scss';

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
        <div className={cn(cls.ErrorPage, className)}>
            <p><Trans>Произошла непредвиденная ошибка</Trans></p>
            <Button onClick={reloadPage}>Обновить страницу</Button>
        </div>
    );
};

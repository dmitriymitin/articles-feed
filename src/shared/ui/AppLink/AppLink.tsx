import {cn} from "shared/lib/classNames/classNames";
import s from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {withChildrenTranslation} from "shared/lib/hocs";

type AppLinkTheme = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme
}

const _AppLink = (props: AppLinkProps) => {
  const {
    className,
    theme = 'primary',
    children,
    ...restProps
  } = props;

  const cls = cn(
    s.AppLink,
    s?.[theme],
    className
  )

  return (
    <Link className={cls} {...restProps}>{children}</Link>
  );
};

export const AppLink = withChildrenTranslation(_AppLink)

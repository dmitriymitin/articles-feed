import { ForwardedRef, forwardRef, memo } from "react";
import { Link, LinkProps } from "react-router-dom";

import { cn } from "@/shared/lib/classNames/classNames";
import { withChildrenTranslation } from "@/shared/lib/hocs/withChildrenTranslation";

import s from "./AppLink.module.scss";

type AppLinkTheme = "primary" | "secondary" | "red";

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
}

const _AppLink = forwardRef((props: AppLinkProps, ref: ForwardedRef<any>) => {
  const { className, theme = "primary", children, ...restProps } = props;

  const cls = cn(s.AppLink, s?.[theme], className);

  return (
    <Link ref={ref} className={cls}  {...restProps}>
      {children}
    </Link>
  );
})

export const AppLink = memo(withChildrenTranslation(_AppLink));

import { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

export interface TransProps extends PropsWithChildren {
  ns?: string;
}

export const Trans = (props: TransProps) => {
  const { children, ns } = props;
  const { t } = useTranslation(ns);

  return <>{t(`${children}`)}</>;
};

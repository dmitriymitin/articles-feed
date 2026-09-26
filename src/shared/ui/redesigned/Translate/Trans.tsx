import { memo, PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";

export interface TransProps extends PropsWithChildren {
  ns?: string;
}

const _Trans = (props: TransProps) => {
  const { children, ns } = props;
  const { t } = useTranslation(ns);

  return <>{t(`${children}`)}</>;
};

export const Trans = memo(_Trans);

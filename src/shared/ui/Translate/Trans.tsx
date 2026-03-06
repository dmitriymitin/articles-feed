import {Fragment, PropsWithChildren} from "react";
import { useTranslation } from "react-i18next";

export interface TransProps extends PropsWithChildren {
  ns?: string;
}

const _Trans = (props: TransProps) => {
  const { children, ns } = props;
  const { t } = useTranslation(ns);

  return (
    <Fragment {...props}>
      {t(`${children}`)}
    </Fragment>
  )
};

export const Trans = _Trans

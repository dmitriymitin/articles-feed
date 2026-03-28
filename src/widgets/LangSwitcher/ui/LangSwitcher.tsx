import React from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/shared/ui/Button";

import s from "./LangSwitcher.module.scss";

import { cn } from "@/shared/lib/classNames/classNames";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className, short } = props;
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const cls = cn(s.LangSwitcher, className);

  return (
    <Button className={cls} theme="clear" onClick={toggle}>
      {short ? "Короткий язык" : "Язык"}
    </Button>
  );
};

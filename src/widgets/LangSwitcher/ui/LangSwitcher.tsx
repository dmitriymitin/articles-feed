import {cn} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React from "react";
import {Button} from "shared/ui/Button";
import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

const _LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }

  const cls = cn(
    s.LangSwitcher,
    className
  )

  return (
    <Button
      className={cls}
      theme='clear'
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
};

export const LangSwitcher = _LangSwitcher

import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';

import { cn } from '@/shared/lib/classNames/classNames';

import s from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className, short } = props;
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  const cls = cn(s.LangSwitcher, className);

  return (
    <ButtonDeprecated className={cls} theme="clear" onClick={toggle}>
      {short ? 'Короткий язык' : 'Язык'}
    </ButtonDeprecated>
  );
};

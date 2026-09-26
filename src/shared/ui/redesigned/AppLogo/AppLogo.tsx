import React, { memo } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';
import AppSvg from '@/shared/assets/icons/app-image.svg';

import { Flex } from '../Flex';

import s from './AppLogo.module.scss';

interface AppLogoProps {
  className?: string;
  size?: number;
}

const _AppLogo = (props: AppLogoProps) => {
  const { className, size = 50 } = props;

  return (
    <Flex max justify="center" className={cn(s.appLogoWrapper, className)}>
      <AppSvg width={size} height={size} color="black" className={s.appLogo} />
      <div className={s.gradientBig} />
      <div className={s.gradientSmall} />
    </Flex>
  );
};

export const AppLogo = memo(_AppLogo);

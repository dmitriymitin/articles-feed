import {
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { Trans } from '../../Translate';

import s from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonColor = 'normal' | 'success' | 'error';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  variant?: ButtonVariant;
  /**
   * Флаг, делающий кнопку квадратной
   */
  square?: boolean;
  /**
   * Размер кнопки в соответствии с дизайн системой
   */
  size?: ButtonSize;
  /**
   * Флаг, отвечающий за работу кнопки
   */
  disabled?: boolean;
  /**
   * Содержимое кнопки
   */
  children?: ReactNode;
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  fullWidth?: boolean;

  color?: ButtonColor;

  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Button = forwardRef(
  (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      children,
      variant = 'outline',
      square,
      disabled,
      fullWidth,
      size = 'm',
      addonLeft,
      addonRight,
      color = 'normal',
      ...otherProps
    } = props;

    return (
      <button
        type="button"
        className={cn(
          s.Button,
          {
            [s.square]: square,
            [s.disabled]: disabled,
            [s.fullWidth]: fullWidth,
            [s.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
          },
          className,
          s[variant],
          s[size],
          s[color],
        )}
        disabled={disabled}
        {...otherProps}
        ref={ref}
      >
        <div className={s.addonLeft}>{addonLeft}</div>
        {typeof children === 'string' ? <Trans>{children}</Trans> : children}
        <div className={s.addonRight}>{addonRight}</div>
      </button>
    );
  },
);

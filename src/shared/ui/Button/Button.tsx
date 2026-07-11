import { ButtonHTMLAttributes, memo, PropsWithChildren } from "react";

import { cn } from "@/shared/lib/classNames/classNames";

import { Trans } from "../Translate";

import s from "./Button.module.scss";

export type ButtonTheme =
  | "clear"
  | "clearInverted"
  | "outline"
  | "outline_red"
  | "background"
  | "backgroundInverted";

export type ButtonSize = "m" | "l" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  /**
   * Тема кнопки. Отвечает за визуал (в рамке, без стилей, противоположный теме приложения цвет и тд)
   */
  theme?: ButtonTheme;
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
  children?: PropsWithChildren["children"];
  /**
   * Увеличивает кнопку на всю свободную ширину
   */
  fullWidth?: boolean;
}

const _Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme = "outline",
    square,
    disabled,
    fullWidth,
    size = "m",
    ...restProps
  } = props;

  const cls = cn(
    s.Button,
    s?.[theme],
    s?.[`size_${size}`],
    {
      [s.square]: square,
      [s.disabled]: disabled,
      [s.fullWidth]: fullWidth,
    },
    className
  );

  return (
    <button type="button" className={cls} disabled={disabled} {...restProps}>
      {typeof children === "string" ? <Trans>{children}</Trans> : children}
    </button>
  );
};

export const Button = memo(_Button);

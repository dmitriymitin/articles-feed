import React, { memo } from "react";

import { cn } from "@/shared/lib/classNames/classNames";

import { Trans } from "../Translate";

import s from "./Text.module.scss";

type TextTheme = "primary" | "inverted" | "error";

type TextAlign = "right" | "left" | "center";

type TextSize = "size_s" | "size_m" | "size_l";

interface TextProps {
  className?: string;
  title?: string;
  text?: string | number;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  as?: keyof React.JSX.IntrinsicElements;

  "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  size_s: "h3",
  size_m: "h2",
  size_l: "h1",
};

export const _Text = (props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = "primary",
    align = "left",
    size = "size_m",
    as,
    "data-testid": dataTestId = "Text",
  } = props;

  const HeaderTag = as || mapSizeToHeaderTag[size] || 'div';

  const classes = cn(s.Text, s[theme], s[align], s[size], className);

  return (
    <div className={classes}>
      {title && (
        <HeaderTag className={s.title} data-testid={`${dataTestId}.Header`}>
          <Trans>{title}</Trans>
        </HeaderTag>
      )}
      {text && (
        <p className={s.text} data-testid={`${dataTestId}.Paragraph`}>
          <Trans>{text}</Trans>
        </p>
      )}
    </div>
  );
};

export const Text = memo(_Text);

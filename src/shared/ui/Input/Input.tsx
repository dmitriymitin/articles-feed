import React, {
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { Trans } from "../Translate";
import s from "./Input.module.scss";
import { cn } from "../../lib/classNames/classNames";

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
}

const _Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autofocus,
    readonly,
    ...restProps
  } = props;
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const classes = cn(
    s.InputWrapper,
    {
      [s.readonly]: readonly,
    },
    className
  );

  return (
    <div className={classes}>
      {placeholder && (
        <div className={s.placeholder}>
          <Trans>{`${placeholder}>`}</Trans>
        </div>
      )}
      <div className={s.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={s.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
          {...restProps}
        />
        {isCaretVisible && (
          <span
            className={s.caret}
            style={{ left: `${caretPosition * 9}px` }}
          />
        )}
      </div>
    </div>
  );
};

// @ts-ignore
export const Input = memo(_Input);

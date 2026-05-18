import { ChangeEvent } from 'react';

import { cn } from "../../lib/classNames/classNames";

import { Trans } from "../Translate";

import s from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

export interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, onChange, value, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    return (
        <div className={cn(s.Wrapper, className)}>
            {label && (
              <span className={s.label}>
                  <Trans>{label}</Trans>
              </span>
            )}
            <select
                className={s.select}
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
            >
                {
                  options?.map((opt) => (
                    <option
                      key={opt.value}
                      value={opt.value}
                      className={s.option}
                    >
                      {opt.content}
                    </option>
                  ))
                }
            </select>
        </div>
    );
};

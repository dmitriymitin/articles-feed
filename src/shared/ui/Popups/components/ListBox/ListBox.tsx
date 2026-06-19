import { Fragment, ReactNode } from 'react';

import { Listbox as HListBox } from '@headlessui/react';

import { cn } from "@/shared/lib/classNames/classNames";
import { DropdownDirection } from '@/shared/types/ui';

import { Button } from '../../../Button';
import { Flex } from '../../../Flex';
import { Trans } from '../../../Translate';

import { mapDirectionClass } from '../../styles/consts';

import popupCls from '../../styles/popup.module.scss';
import s from './ListBox.module.scss';

export interface ListBoxItem<T = string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

export interface ListBoxProps<T = string> {
    options?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: string;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export function ListBox<T extends string>(props: ListBoxProps<T>) {
    const {
        className,
        options,
        value,
        defaultValue,
        onChange,
        readonly,
        direction = 'bottom right',
        label,
    } = props;

    return (
        <Flex align='center' gap="8">
            {label && (
              <span className={s.label}>
                  <Trans>{label}</Trans>
              </span>
            )}
            <HListBox
                disabled={readonly}
                as="div"
                className={cn(s.ListBox, className, popupCls.popup)}
                value={value}
                onChange={onChange}
            >
                <HListBox.Button aria-disabled={readonly} className={s.trigger}>
                    <Button disabled={readonly}>
                        <Trans>
                            {value ?? defaultValue}
                        </Trans>
                    </Button>
                </HListBox.Button>
                <HListBox.Options
                    className={cn(s.options, mapDirectionClass[direction])}
                >
                    {options?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={cn(s.item, {
                                        [popupCls.active]: active,
                                        [popupCls.disabled]: item.disabled,
                                    })}
                                >
                                    {selected && '!!!'}
                                    {item.content}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </Flex>
    );
}

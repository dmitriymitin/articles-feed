import { ReactNode } from 'react';

import { Popover as HPopover } from '@headlessui/react';

import { cn } from "@/shared/lib/classNames/classNames";
import { DropdownDirection } from '@/shared/types/ui';

import { mapDirectionClass } from '../../styles/consts';

import popupCls from '../../styles/popup.module.scss';
import s from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const { className, trigger, direction = 'bottom right', children } = props;

    return (
        <HPopover
            className={cn(s.Popover, className, popupCls.popup)}
        >
            <HPopover.Button as="div" className={popupCls.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel className={cn(s.panel, mapDirectionClass[direction])}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}

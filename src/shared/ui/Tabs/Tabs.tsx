import { Key,ReactNode } from 'react';

import { cn } from '../../lib/classNames/classNames';

import { Card } from '../Card';

import s from './Tabs.module.scss';

export interface TabItem<T extends Key = string> {
    value: T;
    content: ReactNode;
}

interface TabsProps<T extends Key = string> {
    className?: string;
    tabs: TabItem<T>[];
    value?: T | null;
    onTabClick: (value: TabItem<T>['value'], tab?: TabItem<T>) => void;
}

export const Tabs = <T extends Key = string>(props: TabsProps<T>) => {
    const { className, tabs, onTabClick, value } = props;

    const clickHandle =  (tab: TabItem<T>) => () => {
        onTabClick(tab.value, tab);
    }

    return (
      <div className={cn(s.Tabs, className)}>
          {tabs.map((tab) => (
            <Card
              theme={tab.value === value ? 'normal' : 'outlined'}
              className={s.tab}
              key={tab.value}
              onClick={clickHandle(tab)}
            >
                {tab.content}
            </Card>
          ))}
      </div>
    );
};

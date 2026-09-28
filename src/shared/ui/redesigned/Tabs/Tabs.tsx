import { Key, ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { Card } from '../Card';
import { Flex, FlexDirection } from '../Flex';

import s from './Tabs.module.scss';

export interface TabItem<T extends Key = string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends Key = string> {
  className?: string;
  tabs: TabItem<T>[];
  value?: T | null;
  onTabClick: (tab: TabItem<T>) => void;
  direction?: FlexDirection;
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
  const { className, tabs, onTabClick, value, direction = 'row' } = props;

  const clickHandle = (tab: TabItem<T>) => () => {
    onTabClick(tab);
  };

  return (
    <Flex
      vertical={direction === 'column'}
      gap="8"
      align="start"
      className={cn(s.Tabs, className)}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;
        return (
          <Card
            variant={isSelected ? 'light' : 'normal'}
            className={cn(s.tab, {
              [s.selected]: isSelected,
            })}
            key={tab.value}
            onClick={clickHandle(tab)}
            border="round"
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
};

import { ReactNode } from 'react';

import { cn } from '@/shared/lib/classNames/classNames';

import { Card } from '../Card';
import { Flex, FlexDirection } from '../Flex';

import s from './Tabs.module.scss';

export interface TabItem {
  value: string;
  content: ReactNode;
}

interface TabsProps {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
}

export const Tabs = (props: TabsProps) => {
  const { className, tabs, onTabClick, value, direction = 'row' } = props;

  const clickHandle = (tab: TabItem) => () => {
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

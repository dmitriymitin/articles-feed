import { Flex } from '@/shared/ui/redesigned/Flex';

import { cn } from '@/shared/lib/classNames/classNames';

import { ScrollToTopButton } from '@/features/scrollToTopButton';

import cls from './ScrollToolbar.module.scss';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = (props: ScrollToolbarProps) => {
  const { className } = props;

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      max
      className={cn(cls.ScrollToolbar, className)}
    >
      <ScrollToTopButton />
    </Flex>
  );
};

import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { Card } from '@/shared/ui/redesigned/Card';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

import s from './EditableProfileCardViewLayout.module.scss';

interface EditableProfileCardViewLayoutProps {
  className?: string;
  avatar?: ReactNode;
  first?: ReactNode;
  lastname?: ReactNode;
  age?: ReactNode;
  city?: ReactNode;
  username?: ReactNode;
  avatarInput?: ReactNode;
  currency?: ReactNode;
  country?: ReactNode;
}

export const EditableProfileCardViewLayout = (
  props: EditableProfileCardViewLayoutProps,
) => {
  const {
    className,
    avatar,
    age,
    city,
    country,
    avatarInput,
    first,
    username,
    lastname,
    currency,
  } = props;

  const readonly = useSelector(getProfileReadonly);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" border="partial" max className={className}>
          <Flex vertical gap="32">
            {avatar}
            <Flex gap="24" max>
              <Flex vertical gap="16" max>
                {first}
                {lastname}
                {age}
                {city}
              </Flex>
              <Flex vertical gap="16" max>
                {username}
                {avatarInput}
                {currency}
                {country}
              </Flex>
            </Flex>
          </Flex>
        </Card>
      }
      off={
        <Flex
          vertical
          gap="8"
          className={cn(s.Wrapper, { [s.editing]: !readonly })}
        >
          {avatar}
          {first}
          {lastname}
          {age}
          {city}
          {username}
          {avatarInput}
          {country}
          {currency}
        </Flex>
      }
    />
  );
};

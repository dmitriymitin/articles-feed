import React from 'react';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Text } from '@/shared/ui/redesigned/Text';

import { ToggleFeatures } from '@/shared/lib/features';

import { EditableProfileCardHeaderActions } from '../EditableProfileCardHeaderActions/EditableProfileCardHeaderActions';

import s from './EditableProfileCardHeader.module.scss';

export const EditableProfileCardHeader = () => {
  return (
    <div className={s.EditableProfileCardHeader}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" fullWidth border="partial">
            <Flex max align="center" justify="between">
              <Text title="Профиль" />
              <EditableProfileCardHeaderActions />
            </Flex>
          </Card>
        }
        off={
          <>
            <TextDeprecated title="Профиль" />
            <EditableProfileCardHeaderActions />
          </>
        }
      />
    </div>
  );
};

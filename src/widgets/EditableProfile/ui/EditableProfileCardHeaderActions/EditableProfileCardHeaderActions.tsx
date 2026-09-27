import React from 'react';
import { useSelector } from 'react-redux';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import { Button } from '@/shared/ui/redesigned/Button';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getUserAuthData } from '@/entities/user';

import { getProfileId } from '../../model/selectors/getProfileId/getProfileId';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

import s from './EditableProfileCardHeaderActions.module.scss';

export const EditableProfileCardHeaderActions = () => {
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const authData = useSelector(getUserAuthData);
  const profileId = useSelector(getProfileId);
  const canEdit = authData?.id === profileId;

  const activateEdit = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const saveEdit = () => {
    dispatch(updateProfileData());
  };

  const cancelEdit = () => {
    dispatch(profileActions.resetForm());
    dispatch(profileActions.setReadonly(true));
  };

  if (!canEdit) {
    return <></>;
  }

  if (readonly) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Button
            onClick={activateEdit}
            data-testid="EditableProfileCardHeader.EditButton"
          >
            Редактировать
          </Button>
        }
        off={
          <ButtonDeprecated
            onClick={activateEdit}
            className={s.editBtn}
            data-testid="EditableProfileCardHeader.EditButton"
          >
            Редактировать
          </ButtonDeprecated>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Flex align="center" gap="8">
          <Button
            onClick={cancelEdit}
            data-testid="EditableProfileCardHeader.CancelButton"
            color="error"
          >
            Отменить
          </Button>
          <Button
            onClick={saveEdit}
            data-testid="EditableProfileCardHeader.SaveButton"
            color="success"
          >
            Сохранить
          </Button>
        </Flex>
      }
      off={
        <>
          <ButtonDeprecated
            onClick={saveEdit}
            className={s.saveBtn}
            data-testid="EditableProfileCardHeader.SaveButton"
          >
            Сохранить
          </ButtonDeprecated>
          <ButtonDeprecated
            onClick={cancelEdit}
            theme="outline_red"
            data-testid="EditableProfileCardHeader.CancelButton"
          >
            Отменить
          </ButtonDeprecated>
        </>
      }
    />
  );
};

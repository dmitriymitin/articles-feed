import React from 'react';
import { useSelector } from "react-redux";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { getUserAuthData } from "@/entities/User";

import { Button } from "../../../../shared/ui/Button";
import { Trans } from "../../../../shared/ui/Translate";

import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileActions } from "../../model/slice/profileSlice";

import s from "./EditableProfileCardHeaderActions.module.scss";

export const EditableProfileCardHeaderActions = () => {
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const activateEdit = () => {
    dispatch(profileActions.setReadonly(false));
  }

  const saveEdit = () => {
    dispatch(updateProfileData());
  }

  const cancelEdit = () => {
    dispatch(profileActions.resetForm());
    dispatch(profileActions.setReadonly(true));
  }

  if (!canEdit) {
    return <></>
  }

  if (readonly) {
    return (
      <Button onClick={activateEdit} className={s.editBtn}>
        <Trans>Редактировать</Trans>
      </Button>
    )
  }

  return (
    <>
      <Button onClick={saveEdit} className={s.saveBtn}>
        <Trans>Сохранить</Trans>
      </Button>
      <Button onClick={cancelEdit} theme='outline_red'>
        <Trans>Отменить</Trans>
      </Button>
    </>
  );
};

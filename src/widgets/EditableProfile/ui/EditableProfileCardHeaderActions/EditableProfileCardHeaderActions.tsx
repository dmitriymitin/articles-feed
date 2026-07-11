import React from "react";
import { useSelector } from "react-redux";

import { Button } from "@/shared/ui/Button";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { getUserAuthData } from "@/entities/User";

import { getProfileId } from "../../model/selectors/getProfileId/getProfileId";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileActions } from "../../model/slice/profileSlice";

import s from "./EditableProfileCardHeaderActions.module.scss";

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
      <Button
        onClick={activateEdit}
        className={s.editBtn}
        data-testid="EditableProfileCardHeader.EditButton"
      >
        Редактировать
      </Button>
    );
  }

  return (
    <>
      <Button
        onClick={saveEdit}
        className={s.saveBtn}
        data-testid="EditableProfileCardHeader.SaveButton"
      >
        Сохранить
      </Button>
      <Button
        onClick={cancelEdit}
        theme="outline_red"
        data-testid="EditableProfileCardHeader.CancelButton"
      >
        Отменить
      </Button>
    </>
  );
};

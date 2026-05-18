import { useSelector } from "react-redux";

import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import { Trans } from "@/shared/ui/Translate";

import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData";
import { profileAction } from "../../model/slice/profileSlice";

import s from "./EditableProfileCardHeader.module.scss";

export const EditableProfileCardHeader = () => {
  const dispatch = useAppDispatch();
  const readonly = useSelector(getProfileReadonly);

  const activateEdit = () => {
    dispatch(profileAction.setReadonly(false));
  }

  const saveEdit = () => {
    dispatch(updateProfileData());
  }

  const cancelEdit = () => {
    dispatch(profileAction.resetForm());
    dispatch(profileAction.setReadonly(true));
  }

  return (
    <div className={s.EditableProfileCardHeader}>
      <Text title="Профиль" />
      {
        readonly
          ? <Button onClick={activateEdit} className={s.editBtn}>
            <Trans>Редактировать</Trans>
          </Button>
          : <>
            <Button onClick={saveEdit} className={s.saveBtn}>
              <Trans>Сохранить</Trans>
            </Button>
            <Button onClick={cancelEdit} theme='outline_red'>
              <Trans>Отменить</Trans>
            </Button>
          </>
      }
    </div>
  );
};

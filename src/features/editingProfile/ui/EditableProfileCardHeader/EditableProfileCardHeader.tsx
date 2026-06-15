import { Text } from "@/shared/ui/Text";

import { EditableProfileCardHeaderActions } from "../EditableProfileCardHeaderActions/EditableProfileCardHeaderActions";

import s from "./EditableProfileCardHeader.module.scss";

export const EditableProfileCardHeader = () => {
  return (
    <div className={s.EditableProfileCardHeader}>
      <Text title="Профиль" />
     <EditableProfileCardHeaderActions />
    </div>
  );
};

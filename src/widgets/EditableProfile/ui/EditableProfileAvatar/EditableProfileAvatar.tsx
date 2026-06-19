import { useSelector } from "react-redux";

import { Avatar } from "@/shared/ui/Avatar/Avatar";

import { getProfileFormField } from "../../model/selectors/getProfileFormField/getProfileFormField";

import s from "../EditableProfileCardView/EditableProfileCardView.module.scss";

export const EditableProfileAvatar = () => {
  const avatar = useSelector(getProfileFormField('avatar'))

  if (!avatar) return <></>;

  return (
    <div className={s.avatarWrapper}>
      <Avatar src={avatar} alt='avatar' />
    </div>
  );
};

import { useParams } from "react-router-dom";

import { EditableProfileCard } from "@/features/editingProfile";

import s from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={s.ProfilePage}>
      <EditableProfileCard id={id!} />
    </div>
  );
};

export default ProfilePage;

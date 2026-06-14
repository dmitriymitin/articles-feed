import { useParams } from "react-router-dom";

import { EditableProfileCard } from "@/features/editingProfile";

import s from "./ProfilePage.module.scss";

interface ProfilePageProps {}

const ProfilePage = (props: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className={s.ProfilePage}>
      <EditableProfileCard id={id!} />
    </div>
  );
};

export default ProfilePage;

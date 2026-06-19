import { useParams } from "react-router-dom";

import { EditableProfileCard } from "@/widgets/EditableProfile";
import { Page } from "@/widgets/Page";

import s from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page data-testid="ProfilePage" className={s.ProfilePage}>
      <EditableProfileCard id={id!} />
    </Page>
  );
};

export default ProfilePage;

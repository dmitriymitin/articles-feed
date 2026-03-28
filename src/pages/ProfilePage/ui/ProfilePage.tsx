import { ReducersList } from "@/app/providers/StoreProvider";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import s from "./ProfilePage.module.scss";

import { profileReducer } from "@/entities/Profile";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {}

const ProfilePage = (props: ProfilePageProps) => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={s.ProfilePage}>ProfilePage</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

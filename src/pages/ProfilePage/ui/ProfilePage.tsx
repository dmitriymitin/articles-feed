import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { ReducersList } from "@/app/providers/StoreProvider";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import s from "./ProfilePage.module.scss";

import { fetchProfileData, ProfileCard, profileReducer } from "@/entities/Profile";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {}

const ProfilePage = (props: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData('1'));
  }, [])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={s.ProfilePage}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

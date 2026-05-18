import { useEffect } from "react";

import { ReducersList } from "@/app/providers/StoreProvider";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileReducer } from "../../model/slice/profileSlice";

import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { EditableProfileCardView } from "../EditableProfileCardView/EditableProfileCardView";
import { EditableProfileCardViewWrapper } from "../EditableProfileCardViewWrapper/EditableProfileCardViewWrapper";

import { Profile } from "@/entities/Profile";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  id: Profile["id"];
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
  const { id = "1" } = props;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData(id));
  }, [id])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <EditableProfileCardHeader />
      <EditableProfileCardViewWrapper>
        <EditableProfileCardView />
      </EditableProfileCardViewWrapper>
    </DynamicModuleLoader>
  );
};

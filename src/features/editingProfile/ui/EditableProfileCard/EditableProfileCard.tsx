
import { ReducersList } from "@/app/providers/StoreProvider";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";

import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData";
import { profileReducer } from "../../model/slice/profileSlice";

import { EditableProfileCardHeader } from "../EditableProfileCardHeader/EditableProfileCardHeader";
import { EditableProfileCardView } from "../EditableProfileCardView/EditableProfileCardView";
import { EditableProfileCardViewWrapper } from "../EditableProfileCardViewWrapper/EditableProfileCardViewWrapper";
import { EditableProfileValidateErrors } from "../EditableProfileValidateErrors/EditableProfileValidateErrors";

import { Profile } from "@/entities/Profile";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  id: Profile["id"];
}

export const EditableProfileCard = (props: EditableProfileCardProps) => {
  const { id } = props;

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchProfileData(id));
  }, []);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <EditableProfileCardHeader />
      <EditableProfileValidateErrors />
      <EditableProfileCardViewWrapper>
        <EditableProfileCardView />
      </EditableProfileCardViewWrapper>
    </DynamicModuleLoader>
  );
};

import { useSelector } from "react-redux";

import { ReducersList } from "@/app/providers/StoreProvider";

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { Trans } from "@/shared/ui/Translate";

import { DynamicModuleLoader } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import { profileReducer } from "../../model/slice/profileSlice";

import s from "./EditableProfileCard.module.scss";

import { Profile } from "@/entities/Profile";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface EditableProfileCardProps {
  id: Profile["id"];
}

const _EditableProfileCard = (props: EditableProfileCardProps) => {
  const { id } = props;

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={s.ProfileCard}>
      <div className={s.header}>
        <Text title="Профиль" />
        <Button theme="outline" className={s.editBtn}>
          <Trans>Редактировать</Trans>
        </Button>
      </div>
      <div className={s.data}>
        <Input value={data?.first} placeholder="Ваше имя" className={s.input} />
        <Input
          value={data?.lastname}
          placeholder="Ваше фамилия"
          className={s.input}
        />
      </div>
    </div>
  );
};

const hoc = () => (props: EditableProfileCardProps) => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <_EditableProfileCard {...props} />
    </DynamicModuleLoader>
  );
};

export const EditableProfileCard = hoc();

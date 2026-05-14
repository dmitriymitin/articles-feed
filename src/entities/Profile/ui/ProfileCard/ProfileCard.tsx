import { useSelector } from "react-redux";

import { Button } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Text } from "@/shared/ui/Text";
import { Trans } from "@/shared/ui/Translate";

import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";

import s from './ProfileCard.module.scss'

interface ProfileCardProps {

}

export const ProfileCard = (props: ProfileCardProps) => {
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  return (
    <div className={s.ProfileCard}>
      <div className={s.header}>
        <Text title="Профиль" />
        <Button theme='outline' className={s.editBtn}>
          <Trans>Редактировать</Trans>
        </Button>
      </div>
      <div className={s.data}>
        <Input value={data?.first} placeholder="Ваше имя" className={s.input} />
        <Input value={data?.lastname} placeholder="Ваше фамилия" className={s.input} />
      </div>
    </div>
  );
};

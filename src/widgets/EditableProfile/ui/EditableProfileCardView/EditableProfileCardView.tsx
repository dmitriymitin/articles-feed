import { useSelector } from "react-redux";

import { Loader } from "@/shared/ui/Loader";
import { Text } from "@/shared/ui/Text";

import { getProfileError } from "../../model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";

import { EditableProfileAvatar } from "../EditableProfileAvatar/EditableProfileAvatar";
import { EditableProfileCountrySelect } from "../EditableProfileCountrySelect/EditableProfileCountrySelect";
import { EditableProfileCurrencySelect } from "../EditableProfileCurrencySelect/EditableProfileCurrencySelect";
import { EditableProfileInput } from "../EditableProfileInput/EditableProfileInput";

import s from "./EditableProfileCardView.module.scss";

export const EditableProfileCardView = () => {
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  if (isLoading) {
    return (
      <div className={s.loading}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={s.error}>
        <Text
          theme='error'
          title='Произошла ошибка при загрузке профиля'
          text='Попробуйте обновить страницу'
          align='center'
        />
      </div>
    );
  }

  return (
    <div className={s.data}>
      <EditableProfileAvatar />
      <EditableProfileInput
        field="first"
        placeholder="Ваше имя"
        className={s.input}
        data-testid='EditableProfileCardView.first'
      />
      <EditableProfileInput
        field="lastname"
        placeholder="Ваша фамилия"
        className={s.input}
        data-testid='EditableProfileCardView.lastname'
      />
      <EditableProfileInput
        field="age"
        placeholder="Ваш возраст"
        type='number'
        className={s.input}
      />
      <EditableProfileInput
        field="city"
        placeholder="Город"
        className={s.input}
      />
      <EditableProfileInput
        field="username"
        placeholder="Введите имя пользователя"
        className={s.input}
      />
      <EditableProfileInput
        field="avatar"
        placeholder="Введите ссылку на аватар"
        className={s.input}
      />
      <EditableProfileCountrySelect className={s.select} />
      <EditableProfileCurrencySelect className={s.select} />
    </div>
  );
};

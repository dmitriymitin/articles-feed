import { useSelector } from 'react-redux';

import { Loader as LoaderDeprecated } from '@/shared/ui/deprecated/Loader';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Card } from '@/shared/ui/redesigned/Card';
import { Flex } from '@/shared/ui/redesigned/Flex';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

import { ToggleFeatures } from '@/shared/lib/features';

import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

import { EditableProfileAvatar } from '../EditableProfileAvatar/EditableProfileAvatar';
import { EditableProfileCardViewLayout } from '../EditableProfileCardViewLayout/EditableProfileCardViewLayout';
import { EditableProfileCountrySelect } from '../EditableProfileCountrySelect/EditableProfileCountrySelect';
import { EditableProfileCurrencySelect } from '../EditableProfileCurrencySelect/EditableProfileCurrencySelect';
import { EditableProfileInput } from '../EditableProfileInput/EditableProfileInput';

import s from './EditableProfileCardView.module.scss';

export const EditableProfileCardView = () => {
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" max>
            <Flex vertical gap="32">
              <Flex max justify="center">
                <Skeleton border="100%" width={128} height={128} />
              </Flex>
              <Flex gap="32" max>
                <Flex vertical gap="16" max>
                  <Skeleton width="100%" height={38} />
                  <Skeleton width="100%" height={38} />
                  <Skeleton width="100%" height={38} />
                  <Skeleton width="100%" height={38} />
                </Flex>

                <Flex vertical gap="16" max>
                  <Skeleton width="100%" height={38} />
                  <Skeleton width="100%" height={38} />
                  <Skeleton width="100%" height={38} />
                  <Skeleton width="100%" height={38} />
                </Flex>
              </Flex>
            </Flex>
          </Card>
        }
        off={
          <div className={s.loading}>
            <LoaderDeprecated />
          </div>
        }
      />
    );
  }

  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Flex justify="center" max>
            <Text
              variant="error"
              title="Произошла ошибка при загрузке профиля"
              text="Попробуйте обновить страницу"
              align="center"
            />
          </Flex>
        }
        off={
          <div className={s.error}>
            <TextDeprecated
              theme="error"
              title="Произошла ошибка при загрузке профиля"
              text="Попробуйте обновить страницу"
              align="center"
            />
          </div>
        }
      />
    );
  }

  return (
    <EditableProfileCardViewLayout
      avatar={<EditableProfileAvatar />}
      first={
        <EditableProfileInput
          field="first"
          placeholder="Имя"
          className={s.input}
          data-testid="EditableProfileCardView.first"
        />
      }
      lastname={
        <EditableProfileInput
          field="lastname"
          placeholder="Фамилия"
          className={s.input}
          data-testid="EditableProfileCardView.lastname"
        />
      }
      age={
        <EditableProfileInput
          field="age"
          placeholder="возраст"
          type="number"
          className={s.input}
        />
      }
      city={
        <EditableProfileInput
          field="city"
          placeholder="Город"
          className={s.input}
        />
      }
      username={
        <EditableProfileInput
          field="username"
          placeholder="Имя пользователя"
          className={s.input}
        />
      }
      avatarInput={
        <EditableProfileInput
          field="avatar"
          placeholder="Ссылка на аватар"
          className={s.input}
        />
      }
      country={<EditableProfileCountrySelect className={s.select} />}
      currency={<EditableProfileCurrencySelect className={s.select} />}
    />
  );
};

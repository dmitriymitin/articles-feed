import { useSelector } from 'react-redux';

import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { ToggleFeatures } from '@/shared/lib/features';

import { getProfileFormField } from '../../model/selectors/getProfileFormField/getProfileFormField';

import s from '../EditableProfileCardView/EditableProfileCardView.module.scss';

export const EditableProfileAvatar = () => {
  const avatar = useSelector(getProfileFormField('avatar'));

  if (!avatar) return <></>;

  return (
    <div className={s.avatarWrapper}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Flex justify="center" max>
            <Avatar size={128} src={avatar} />
          </Flex>
        }
        off={<AvatarDeprecated src={avatar} alt="avatar" />}
      />
    </div>
  );
};

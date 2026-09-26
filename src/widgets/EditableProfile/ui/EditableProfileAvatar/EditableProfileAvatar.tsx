import { useSelector } from 'react-redux';

import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';

import { getProfileFormField } from '../../model/selectors/getProfileFormField/getProfileFormField';

import s from '../EditableProfileCardView/EditableProfileCardView.module.scss';

export const EditableProfileAvatar = () => {
  const avatar = useSelector(getProfileFormField('avatar'));

  if (!avatar) return <></>;

  return (
    <div className={s.avatarWrapper}>
      <AvatarDeprecated src={avatar} alt="avatar" />
    </div>
  );
};

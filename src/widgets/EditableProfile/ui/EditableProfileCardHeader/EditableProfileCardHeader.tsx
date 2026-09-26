import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';

import { EditableProfileCardHeaderActions } from '../EditableProfileCardHeaderActions/EditableProfileCardHeaderActions';

import s from './EditableProfileCardHeader.module.scss';

export const EditableProfileCardHeader = () => {
  return (
    <div className={s.EditableProfileCardHeader}>
      <TextDeprecated title="Профиль" />
      <EditableProfileCardHeaderActions />
    </div>
  );
};

import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Flex } from '@/shared/ui/redesigned/Flex';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';

import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

import { getUserAuthData } from '@/entities/user';

interface DesignSwitcherProps {
  className?: string;
}

export const DesignSwitcher = (props: DesignSwitcherProps) => {
  const { className } = props;

  const isAppRedesigned = getFeatureFlag('isAppRedesigned').value;

  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);

  const [isLoading, setIsLoading] = useState(false);

  const forceUpdate = useForceUpdate();

  const items = [
    {
      content: 'Новый',
      value: 'new',
    },
    {
      content: 'Старый',
      value: 'old',
    },
  ];

  const onChange = async (value: string) => {
    if (authData) {
      setIsLoading(true);
      await dispatch(
        updateFeatureFlag({
          userId: authData.id,
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
        }),
      ).unwrap();
      setIsLoading(false);
      forceUpdate();
    }
  };

  return (
    <Flex align="center" gap="4">
      <Text text="Вариант интерфейса" />
      {isLoading ? (
        <Skeleton width={100} height={40} />
      ) : (
        <ListBox
          onChange={onChange}
          items={items}
          value={isAppRedesigned ? 'new' : 'old'}
          className={className}
        />
      )}
    </Flex>
  );
};

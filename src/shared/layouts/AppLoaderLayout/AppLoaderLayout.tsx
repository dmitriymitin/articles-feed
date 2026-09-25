
import { Skeleton } from '@/shared/ui/Skeleton';

import { Flex } from "../../ui/Flex";

import { MainLayout } from '../MainLayout';

import s from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = () => {
  return (
    <MainLayout
      header={
        <Flex className={s.header}>
          <Skeleton width={40} height={40} border="50%" />
        </Flex>
      }
      content={
        <Flex vertical gap="16" style={{ height: '100%' }}>
          <Skeleton width="70%" height={32} border="16px" />
          <Skeleton width="40%" height={20} border="16px" />
          <Skeleton width="50%" height={20} border="16px" />
          <Skeleton width="30%" height={32} border="16px" />
          <Skeleton width="80%" height="40%" border="16px" />
          <Skeleton width="80%" height="40%" border="16px" />
        </Flex>
      }
      sidebar={<Skeleton border="32px" width={220} height="100%" />}
    />
  );
};

import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { MainLayout } from '../MainLayout';

import s from './AppLoaderLayout.module.scss';

export const AppLoaderLayout = () => {
  return (
    <MainLayout
      header={
        <Flex className={s.header}>
          <SkeletonDeprecated width={40} height={40} border="50%" />
        </Flex>
      }
      content={
        <Flex vertical gap="16" style={{ height: '100%' }}>
          <SkeletonDeprecated width="70%" height={32} border="16px" />
          <SkeletonDeprecated width="40%" height={20} border="16px" />
          <SkeletonDeprecated width="50%" height={20} border="16px" />
          <SkeletonDeprecated width="30%" height={32} border="16px" />
          <SkeletonDeprecated width="80%" height="40%" border="16px" />
          <SkeletonDeprecated width="80%" height="40%" border="16px" />
        </Flex>
      }
      sidebar={<SkeletonDeprecated border="32px" width={220} height="100%" />}
    />
  );
};

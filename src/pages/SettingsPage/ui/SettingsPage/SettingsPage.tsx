import { useTranslation } from 'react-i18next';

import { Flex } from "@/shared/ui/Flex";
import { Text } from '@/shared/ui/Text';

import { Page } from '@/widgets/Page';

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Flex vertical gap="16">
        <Text title={t('Настройки пользователя')} />
      </Flex>
    </Page>
  );
};

export default SettingsPage;

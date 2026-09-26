import { useTranslation } from 'react-i18next';

import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { Page } from '@/widgets/Page';

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <Flex vertical gap="16">
        <TextDeprecated title={t('Настройки пользователя')} />
      </Flex>
    </Page>
  );
};

export default SettingsPage;

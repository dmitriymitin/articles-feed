import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Flex } from '@/shared/ui/redesigned/Flex';

import { DesignSwitcher } from '@/features/designSwitch';
import { Page } from '@/widgets/Page';

const SettingsPage = () => {
  return (
    <Page>
      <Flex vertical gap="16">
        <TextDeprecated title="Настройки пользователя" />
        <DesignSwitcher />
      </Flex>
    </Page>
  );
};

export default SettingsPage;

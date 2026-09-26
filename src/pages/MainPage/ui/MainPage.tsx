import React from 'react';

import { Trans } from '@/shared/ui/redesigned/Translate';

import { Page } from '@/widgets/Page';

const MainPage = () => {
  return (
    <Page data-testid="MainPage">
      <Trans>Главная страница</Trans>
    </Page>
  );
};

export default MainPage;

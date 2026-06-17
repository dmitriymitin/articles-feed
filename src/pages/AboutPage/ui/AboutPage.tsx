import React from "react";

import { Trans } from "@/shared/ui/Translate";

import { Page } from '@/widgets/Page';

const AboutPage = () => {
  return (
    <Page data-testid="AboutPage">
      <Trans ns="about">О сайте</Trans>
    </Page>
  );
};

export default AboutPage;

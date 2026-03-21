import React from 'react';
import {Trans} from "shared/ui/Translate";
import {Counter} from "entities/Counter";

const AboutPage = () => {
  return (
    <div>
      <Trans ns='about'>О сайте</Trans>
      <Counter />
    </div>
  );
};

export default AboutPage;

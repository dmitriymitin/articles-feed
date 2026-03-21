import React from 'react';
import {Trans} from "shared/ui/Translate";
import {Counter} from "entities/Counter";


const MainPage = () => {
  return (
    <div>
      <Trans>Главная страница</Trans>
      <Counter />
    </div>
  );
};

export default MainPage;

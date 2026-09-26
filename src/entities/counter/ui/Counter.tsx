import { useTranslation } from 'react-i18next';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';

import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { t } = useTranslation();

  const { decrement, increment, add } = useCounterActions();

  const handleInc = () => {
    increment();
  };

  const handleDec = () => {
    decrement();
  };

  const handleAddFive = () => {
    add(5);
  };

  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <ButtonDeprecated onClick={handleAddFive} data-testid="increment-btn5">
        {t('add5')}
      </ButtonDeprecated>
      <ButtonDeprecated onClick={handleInc} data-testid="increment-btn">
        {t('increment')}
      </ButtonDeprecated>
      <ButtonDeprecated data-testid="decrement-btn" onClick={handleDec}>
        {t('decrement')}
      </ButtonDeprecated>
    </div>
  );
};

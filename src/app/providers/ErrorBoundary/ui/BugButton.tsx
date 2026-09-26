import { useEffect, useState } from 'react';

import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/Button';

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrow = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <ButtonDeprecated onClick={onThrow}>throw error</ButtonDeprecated>;
};

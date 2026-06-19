import { configureStore } from '@reduxjs/toolkit';

import { rtkApi } from '@/shared/api/rtkApi';

export const createTestRtkQueryStore = () => {
  const store = configureStore({
    reducer: {
      [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware),
  });
  return store;
};

export type TestRtkQueryStore = ReturnType<typeof createTestRtkQueryStore>;
export type TestRtkQueryDispatch = TestRtkQueryStore['dispatch'];

import { useStore as useStoreBase } from "react-redux";

import { ReduxStoreWithManager } from "@/app/providers/StoreProvider";

/**
 * Возвращает redux store с reducerManager для асинхронного подключения редьюсеров.
 */
export const useAppStore = () => {
  const result = useStoreBase() as ReduxStoreWithManager;

  return result;
};

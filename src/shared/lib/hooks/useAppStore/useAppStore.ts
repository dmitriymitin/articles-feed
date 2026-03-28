import { useStore as useStoreBase } from "react-redux";

import { ReduxStoreWithManager } from "@/app/providers/StoreProvider";

export const useAppStore = () => {
  const result = useStoreBase() as ReduxStoreWithManager;

  return result;
};

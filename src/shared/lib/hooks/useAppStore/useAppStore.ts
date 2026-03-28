import { useStore as useStoreBase } from "react-redux";

import { ReduxStoreWithManager } from "@/app/providers/StoreProvider/config/StateSchema";

export const useAppStore = () => {
  const result = useStoreBase() as ReduxStoreWithManager;

  return result;
};

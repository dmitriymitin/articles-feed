import { useStore as useStoreBase } from "react-redux";
import { StateSchema } from "@/app/providers/StoreProvider";

export const useAppStore = () => {
  const result = useStoreBase();

  const getState = () => result.getState() as StateSchema;

  return {
    ...result,
    getState,
  };
};

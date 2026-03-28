import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { StateSchema } from "../config/StateSchema";
import { createReduxStore } from "../config/store";

interface StoreProviderProps extends PropsWithChildren {
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as StateSchema);

  console.log("RENDER");

  return <Provider store={store}>{children}</Provider>;
};

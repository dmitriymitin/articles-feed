import { PropsWithChildren } from "react";

import { MOBILE_BREAKPOINT } from "@/shared/const/deviceDetect";

import { ResponsiveView } from './components/ResponsiveView/ResponsiveView';

export const BrowserView = ({ children }: PropsWithChildren) => {
  return (
    <ResponsiveView minWidth={MOBILE_BREAKPOINT + 1}>
      {children}
    </ResponsiveView>
  );
}

export const MobileView = ({ children }: PropsWithChildren)=> {
  return (
    <ResponsiveView maxWidth={MOBILE_BREAKPOINT}>
      {children}
    </ResponsiveView>
  );
}

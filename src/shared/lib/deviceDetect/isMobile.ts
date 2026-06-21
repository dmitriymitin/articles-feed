import { MOBILE_BREAKPOINT } from "@/shared/const/deviceDetect";

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.innerWidth < MOBILE_BREAKPOINT;
}

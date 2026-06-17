import { RefObject, useEffect, useRef } from "react";

type useInViewOptions = {
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
  callOnEnter?: boolean;
};

export function useInView<T extends Element>(
  ref: RefObject<T>,
  callback: () => void,
  {
    delay = 1000,
    threshold = 0.25,
    rootMargin = "0px",
    enabled = true,
    callOnEnter = true,
  }: useInViewOptions = {}
) {
  const callbackRef = useRef(callback);
  const timerRef = useRef<number | null>(null);
  const isVisibleRef = useRef(false);

  callbackRef.current = callback;

  useEffect(() => {
    const element = ref.current;

    if (!element || !enabled) return;

    const stop = () => {
      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const start = () => {
      if (timerRef.current !== null) return;
      if (callOnEnter) {
        callbackRef.current();
      }
      timerRef.current = window.setInterval(() => {
        if (isVisibleRef.current) {
          callbackRef.current();
        }
      }, delay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          start();
        } else {
          stop();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    // eslint-disable-next-line consistent-return
    return () => {
      stop();
      observer.disconnect();
      isVisibleRef.current = false;
    };

  }, [ref, delay, threshold, rootMargin, enabled, callOnEnter]);
}

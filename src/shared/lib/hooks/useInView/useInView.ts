import { RefObject, useEffect, useRef } from "react";

type useInViewOptions = {
  delay?: number;
};

export function useInView<T extends Element>(
  ref: RefObject<T>,
  callback: () => void,
  { delay = 1000 }: useInViewOptions = {}
) {
  const callbackRef = useRef(callback);
  const timerRef = useRef<any>(null);
  const isVisibleRef = useRef(false);

  callbackRef.current = callback;

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const stop = () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    const start = () => {
      if (timerRef.current !== null) return;

      callbackRef.current();

      timerRef.current = setInterval(() => {
        if (isVisibleRef.current) {
          callbackRef.current();
        }
      }, delay);
    };

    const observer = new IntersectionObserver(([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        entry.isIntersecting ? start() : stop();
      },
      {
        threshold: 0.25,
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    // eslint-disable-next-line consistent-return
    return () => {
      stop();
      observer.disconnect();
      isVisibleRef.current = false;
    };

  }, [ref, delay]);
}

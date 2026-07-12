import { useCallback, useEffect, useRef } from "react";

/**
 * Возвращает throttled-версию callback.
 * Первый вызов выполняется сразу, следующие вызовы игнорируются до окончания delay.
 * Таймер очищается при размонтировании компонента.
 */
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throttleRef = useRef(false);
  const timeoutRef = useRef<any>(null);

  const throttledCallback = useCallback(
    (...args) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        timeoutRef.current = setTimeout(() => {
          throttleRef.current = false;
        }, delay);
      }
    },
    [callback, delay]
  );

  useEffect(
    () => () => {
      clearTimeout(timeoutRef.current);
    },
    []
  );

  return throttledCallback;
}

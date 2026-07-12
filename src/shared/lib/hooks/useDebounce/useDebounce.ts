import { MutableRefObject, useCallback, useRef } from "react";

/**
 * Возвращает debounced-версию callback.
 * Каждый новый вызов сбрасывает предыдущий таймер, поэтому callback выполнится
 * только после паузы длиной delay.
 * @param callback - функция, которую нужно вызвать с задержкой
 * @param delay - задержка в миллисекундах
 */
export function useDebounce(callback: (...args: any[]) => void, delay: number) {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
}

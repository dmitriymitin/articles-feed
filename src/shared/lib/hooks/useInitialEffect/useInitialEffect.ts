import { DependencyList, useEffect } from "react";

/**
 * Выполняет effect только вне Storybook и Jest.
 * Используется для эффектов, которые не должны запускаться в тестах и сторис.
 */
export function useInitialEffect(
  callback: () => void,
  dependency: DependencyList
) {
  useEffect(() => {
    if (__PROJECT__ !== "storybook" && __PROJECT__ !== "jest") {
      callback();
    }
    // eslint-disable-next-line
  }, dependency);
}

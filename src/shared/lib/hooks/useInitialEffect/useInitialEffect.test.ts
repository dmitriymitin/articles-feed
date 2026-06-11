import { renderHook } from '@testing-library/react';

import { useInitialEffect } from './useInitialEffect';

describe('useInitialEffect', () => {
  const originalProject = (global as any).__PROJECT__;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    (global as any).__PROJECT__ = originalProject;
  });

  test('вызывает callback один раз, если __PROJECT__ не "storybook" и не "jest"', () => {
    const callback = jest.fn();
    (global as any).__PROJECT__ = 'frontend';

    renderHook(() => useInitialEffect(callback, []));

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test('не вызывает callback, если __PROJECT__ === "storybook"', () => {
    const callback = jest.fn();
    (global as any).__PROJECT__ = 'storybook';

    renderHook(() => useInitialEffect(callback, []));

    expect(callback).not.toHaveBeenCalled();
  });

  test('не вызывает callback, если __PROJECT__ === "jest"', () => {
    const callback = jest.fn();
    (global as any).__PROJECT__ = 'jest';

    renderHook(() => useInitialEffect(callback, []));

    expect(callback).not.toHaveBeenCalled();
  });

  test('callback вызывается только один раз при повторных рендерах', () => {
    const callback = jest.fn();
    (global as any).__PROJECT__ = 'frontend';

    const { rerender } = renderHook(() => useInitialEffect(callback, []));

    rerender();

    expect(callback).toHaveBeenCalledTimes(1);
  });
});

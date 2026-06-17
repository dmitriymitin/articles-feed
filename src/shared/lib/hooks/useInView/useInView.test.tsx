// useInView.test.tsx
import { useRef } from "react";

import { cleanup,render } from "@testing-library/react";

import { useInView } from "./useInView";

let observerCallback: IntersectionObserverCallback;
const observeMock = jest.fn();
const disconnectMock = jest.fn();
class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    observerCallback = callback;
  }

  observe = observeMock;

  disconnect = disconnectMock;

  unobserve = jest.fn();

  takeRecords = jest.fn();

  root = null;

  rootMargin = "";

  thresholds = [];
}
function triggerIntersection(isIntersecting: boolean) {
  observerCallback(
    [
      {
        isIntersecting,
        intersectionRatio: isIntersecting ? 1 : 0,
      } as IntersectionObserverEntry,
    ],
    {} as IntersectionObserver
  );
}
function TestComponent({
                         onVisible,
                         delay,
                         enabled = true,
                         callOnEnter = true,
                       }: {
  onVisible: () => void;
  delay?: number;
  enabled?: boolean;
  callOnEnter?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useInView(ref, onVisible, {
    delay,
    enabled,
    callOnEnter,
  });
  return <div ref={ref}>target</div>;
}
describe("useInView", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    observeMock.mockClear();
    disconnectMock.mockClear();
    Object.defineProperty(window, "IntersectionObserver", {
      writable: true,
      value: MockIntersectionObserver,
    });
  });
  afterEach(() => {
    cleanup();
    jest.clearAllTimers();
    jest.useRealTimers();
  });
  it("вызывает callback сразу при попадании элемента во viewport", () => {
    const onVisible = jest.fn();
    render(<TestComponent onVisible={onVisible} delay={1000} />);
    triggerIntersection(true);
    expect(onVisible).toHaveBeenCalledTimes(1);
  });
  it("продолжает вызывать callback с заданной задержкой, пока элемент видим", () => {
    const onVisible = jest.fn();
    render(<TestComponent onVisible={onVisible} delay={1000} />);
    triggerIntersection(true);
    expect(onVisible).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(onVisible).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(1000);
    expect(onVisible).toHaveBeenCalledTimes(3);
  });
  it("останавливает вызовы, когда элемент выходит из viewport", () => {
    const onVisible = jest.fn();
    render(<TestComponent onVisible={onVisible} delay={1000} />);
    triggerIntersection(true);
    expect(onVisible).toHaveBeenCalledTimes(1);
    triggerIntersection(false);
    jest.advanceTimersByTime(3000);
    expect(onVisible).toHaveBeenCalledTimes(1);
  });
  it("снова запускает вызовы, если элемент повторно попал во viewport", () => {
    const onVisible = jest.fn();
    render(<TestComponent onVisible={onVisible} delay={1000} />);
    triggerIntersection(true);
    expect(onVisible).toHaveBeenCalledTimes(1);
    triggerIntersection(false);
    jest.advanceTimersByTime(1000);
    expect(onVisible).toHaveBeenCalledTimes(1);
    triggerIntersection(true);
    expect(onVisible).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(1000);
    expect(onVisible).toHaveBeenCalledTimes(3);
  });
  it("не вызывает callback сразу, если callOnEnter = false", () => {
    const onVisible = jest.fn();
    render(
      <TestComponent
        onVisible={onVisible}
    delay={1000}
    callOnEnter={false}
    />
  );
    triggerIntersection(true);
    expect(onVisible).not.toHaveBeenCalled();
    jest.advanceTimersByTime(1000);
    expect(onVisible).toHaveBeenCalledTimes(1);
  });
  it("не создает observer, если enabled = false", () => {
    const onVisible = jest.fn();
    render(
      <TestComponent
        onVisible={onVisible}
    enabled={false}
    />
  );
    expect(observeMock).not.toHaveBeenCalled();
    expect(onVisible).not.toHaveBeenCalled();
  });
  it("очищает observer и timer при unmount", () => {
    const onVisible = jest.fn();
    const { unmount } = render(
      <TestComponent onVisible={onVisible} delay={1000} />
  );
    triggerIntersection(true);
    unmount();
    jest.advanceTimersByTime(3000);
    expect(disconnectMock).toHaveBeenCalledTimes(1);
    expect(onVisible).toHaveBeenCalledTimes(1);
  });
});

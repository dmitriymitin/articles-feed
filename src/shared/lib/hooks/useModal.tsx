import { MutableRefObject, useEffect, useRef, useState } from "react";

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

/**
 * Переиспользуемый хук для модальных компонентов (drawer/modal)
 * @param animationDelay
 * @param isOpen
 * @param onClose
 */
export function useModal({ animationDelay, isOpen, onClose }: UseModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const close = () => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, animationDelay);
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      close();
    }
  };

  useEffect(() => {
    const abortController = new AbortController();

    if (isOpen) {
      window.addEventListener("keydown", onKeyDown, {
        signal: abortController.signal,
      });
    }

    return () => {
      clearTimeout(timerRef.current);
      abortController.abort();
    };
  }, [isOpen]);

  return {
    isClosing,
    isMounted,
    close,
  };
}

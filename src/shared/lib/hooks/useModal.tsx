import { MutableRefObject, useEffect, useRef, useState } from "react";

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

/**
 * Управляет состоянием открытия и закрытия modal/drawer компонентов.
 * При закрытии выставляет isClosing, ждет animationDelay и затем вызывает onClose.
 * Также закрывает модальное окно по Escape, когда isOpen === true.
 * @param animationDelay - длительность анимации закрытия в миллисекундах
 * @param isOpen - открыт ли компонент сейчас
 * @param onClose - обработчик завершения закрытия
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

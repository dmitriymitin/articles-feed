import { type ReactNode,useEffect, useState } from 'react';

type ResponsiveViewProps = {
  children: ReactNode;
  minWidth?: number;
  maxWidth?: number;
};

export const ResponsiveView = (props: ResponsiveViewProps)=> {
  const { children, minWidth, maxWidth } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;
      const matchesMinWidth = minWidth === undefined || width >= minWidth;
      const matchesMaxWidth = maxWidth === undefined || width <= maxWidth;
      setIsVisible(matchesMinWidth && matchesMaxWidth);
    };
    check();
    window.addEventListener('resize', check);
    return () => {
      window.removeEventListener('resize', check);
    };
  }, [minWidth, maxWidth]);

  return isVisible ? <>{children}</> : null;
}

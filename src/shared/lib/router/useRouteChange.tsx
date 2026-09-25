import { matchPath, useLocation } from 'react-router-dom';

import { AppRouteByPathPattern, AppRoutes } from '@/shared/const/router';

export function useRouteChange(): AppRoutes {
    const { pathname } = useLocation();

    const pattern = Object.keys(AppRouteByPathPattern).find(
      (pattern) => matchPath(pattern, pathname)
    );

    return pattern
      ? AppRouteByPathPattern[pattern]
      : AppRoutes.MAIN;
}
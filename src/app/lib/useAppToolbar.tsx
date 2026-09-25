import { ReactElement } from 'react';

import { useRouteChange } from '@/shared/lib/router/useRouteChange';
import { AppRoutes } from '@/shared/const/router';

import { ScrollToolbar } from '@/widgets/ScrollToolbar';

export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
    };

    return toolbarByAppRoute[appRoute];
}

import React, { memo } from 'react';

import { useJsonSettings } from '@/entities/user';

import { ThemeProvider } from './ThemeProvider'

export const withTheme = (Component: React.ComponentType) => {
    const MemoComponent = memo(Component);

    return () => {
        const { theme: defaultTheme } = useJsonSettings();

        return (
            <ThemeProvider initialTheme={defaultTheme}>
                <MemoComponent />
            </ThemeProvider>
        );
    };
};

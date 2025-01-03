import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import type { ComponentProps, PropsWithChildren } from 'react';

import { theme } from '@/configs';

export const ThemeProvider = ({ children, ...props }: PropsWithChildren<ComponentProps<typeof MantineProvider>>) => {
    return (
        <MantineProvider
            {...props}
            theme={theme}
        >
            {children}
        </MantineProvider>
    );
};

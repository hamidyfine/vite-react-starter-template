import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import type { ComponentProps, PropsWithChildren } from 'react';

export const ThemeProvider = ({ children, ...props }: PropsWithChildren<ComponentProps<typeof MantineProvider>>) => {
    return (
        <MantineProvider {...props}>
            {children}
        </MantineProvider>
    );
};

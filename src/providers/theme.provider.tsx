import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/notifications/styles.css';
import '@fontsource/roboto';
import '../assets/fonts/vazir/font-face.css';

// import '@fontsource-variable/inter';
// import '@fontsource-variable/vazirmatn';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ComponentProps, PropsWithChildren } from 'react';

interface IThemeProviderProps extends ComponentProps<typeof MantineProvider> {}

export const ThemeProvider = ({ children, theme, ...props }: PropsWithChildren<IThemeProviderProps>) => {
    return (
        <MantineProvider
            theme={theme}
            {...props}
        >
            <Notifications />
            {children}
        </MantineProvider>
    );
};

import '@fontsource-variable/sofia-sans';
import '@mantine/core/styles.css';
import './main.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';

import { theme } from './configs';
import { IntlProvider, RouteProvider, ThemeProvider } from './providers';
import { store } from './stores';


// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <StoreProvider store={store}>
            <IntlProvider>
                <ThemeProvider theme={theme}>
                    <RouteProvider />
                </ThemeProvider>
            </IntlProvider>
        </StoreProvider>
    </StrictMode>,
);

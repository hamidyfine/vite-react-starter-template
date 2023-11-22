import '@fontsource-variable/sofia-sans';
import '@mantine/core/styles.css';
import './main.scss';

import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as StoreProvider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes, theme } from './configs';
import { store } from './stores';

const router = createBrowserRouter(routes);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <StoreProvider store={store}>
            <MantineProvider theme={theme}>
                <RouterProvider router={router} />
            </MantineProvider>
        </StoreProvider>
    </StrictMode>,
);

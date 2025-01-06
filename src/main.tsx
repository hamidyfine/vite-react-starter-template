import { createRouter,RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { IntlProvider, QueryProvider, ThemeProvider } from './providers';
import { routeTree } from './route-tree.gen';

const router = createRouter({
    defaultPreload: 'intent',
    routeTree,
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const rootElement = document.getElementById('root') as HTMLElement;

if (!rootElement.innerHTML) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <IntlProvider locale="en">
                <ThemeProvider>
                    <QueryProvider>
                        <RouterProvider router={router} />
                    </QueryProvider>
                </ThemeProvider>
            </IntlProvider>
        </StrictMode>,
    );
}

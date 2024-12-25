import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { IntlProvider } from './providers';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <IntlProvider>
            <App />
        </IntlProvider>
    </StrictMode>,
);

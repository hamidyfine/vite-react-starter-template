import './main.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './home';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <App />
    </StrictMode>,
);

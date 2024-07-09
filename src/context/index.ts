import { createContext } from 'react';

export const intlContext = createContext<{changeLocale?: (locale: string) => void; locale?: string}>({});

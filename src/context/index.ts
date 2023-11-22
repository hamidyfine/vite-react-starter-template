import { createContext } from 'react';

export const intlContext = createContext<{locale?: string; changeLocale?: (locale: string) => void}>({});

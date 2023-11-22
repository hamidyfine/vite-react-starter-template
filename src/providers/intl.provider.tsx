import { createContext, PropsWithChildren, useState } from 'react';
import { IntlProvider as Provider } from 'react-intl';

import { default_locale, locales, messages } from '../locales';

const intlContext = createContext<{locale?: string; changeLocale?: (locale: string) => void}>({});

const IntlProvider = ({ children }: PropsWithChildren<unknown>) => {
    const [activeLocale, setActiveLocale] = useState(localStorage.getItem('locale') || default_locale);

    const changeLocale = (newLocale: string) => {
        if (locales.includes(newLocale)) {
            setActiveLocale(newLocale);
        }
    };

    return (
        <intlContext.Provider value={{ locale: activeLocale, changeLocale }}>
            <Provider
                locale={activeLocale}
                messages={messages[activeLocale as keyof typeof messages]}
            >
                {children}
            </Provider>
        </intlContext.Provider>
    );
};

export {
    // eslint-disable-next-line react-refresh/only-export-components
    intlContext,
    IntlProvider,
};

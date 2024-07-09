import { locale as dayjsLocale } from 'dayjs';
import { PropsWithChildren, useEffect, useState } from 'react';
import { IntlProvider as Provider } from 'react-intl';

import { app, messages } from '../configs';
import { intlContext } from '../context';
import { useDispatch } from '../hooks';
import { setLocale } from '../stores/app.store';

export const IntlProvider = ({ children }: PropsWithChildren) => {
    const [activeLocale, setActiveLocale] = useState(localStorage.getItem('locale') || app.default_locale);
    const dispatch = useDispatch();
    const ls = app.locales.map((l) => l.locale);

    const updateTextDirection = (locale: string) => {
        const locale_obj = app.locales.find((l) => l.locale === locale);
        const direction = locale_obj?.dir || 'ltr';
        document.documentElement.setAttribute('dir', direction);
    };

    if (!localStorage.getItem('locale')) {
        localStorage.setItem('locale', app.default_locale);
        updateTextDirection(app.default_locale);
    }

    const changeLocale = (newLocale: string) => {
        if (ls.includes(newLocale)) {
            dispatch(setLocale(newLocale));
            setActiveLocale(newLocale);
            window.location.reload();
        }
    };

    useEffect(() => {
        const locale = localStorage.getItem('locale') || app.default_locale;
        dayjsLocale(locale);
        dispatch(setLocale(locale));
        updateTextDirection(locale);
    }, [dispatch, ls]);

    return (
        <intlContext.Provider value={{ changeLocale, locale: activeLocale }}>
            <Provider
                defaultLocale={app.default_locale}
                locale={activeLocale}
                messages={messages[activeLocale as keyof typeof messages]}
            >
                {children}
            </Provider>
        </intlContext.Provider>
    );
};

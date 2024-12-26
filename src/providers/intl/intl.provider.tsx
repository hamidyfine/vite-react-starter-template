import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import type { PropsWithChildren } from 'react';

// Import Catalogs
import { messages as enMessages } from '../../locales/en/messages';

// TODO: Import locales from config
const locales = ['en'];
const default_locale = 'en';

export const IntlProvider = ({ children, locale }: PropsWithChildren<{ locale?: string }>) => {
    let _locale = locale ? locale : '';

    if (!locale || locale === '' || !locales.includes(locale)) {
        console.warn(`Invalid locale provided: ${locale}. Defaulting to ${default_locale}`);
        _locale = default_locale;
    }

    // Inject Catalogs
    i18n.load({
        en: enMessages,
    });

    // Activate Catalog
    i18n.activate(_locale);

    return (
        <I18nProvider i18n={i18n}>
            {children}
        </I18nProvider>
    );
};

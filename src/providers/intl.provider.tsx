import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import type { PropsWithChildren } from 'react';

// Import Catalogs
import { messages as enMessages } from '../locales/en/messages';

export const IntlProvider = ({ children, locale = 'en' }: PropsWithChildren<{ locale?: string }>) => {
    // Inject Catalogs
    i18n.load({
        en: enMessages,
    });

    // Activate Catalog
    i18n.activate(locale);

    return (
        <I18nProvider i18n={i18n}>
            {children}
        </I18nProvider>
    );
};

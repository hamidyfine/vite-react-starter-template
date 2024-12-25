import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import type { PropsWithChildren } from 'react';

// Import Catalogs
import { messages as enMessages } from '../locales/en/messages';

// Inject Catalogs
i18n.load({
    en: enMessages,
});

// Activate Default Catalog
i18n.activate('en');

export const IntlProvider = ({ children }: PropsWithChildren) => {
    return (
        <I18nProvider i18n={i18n}>
            {children}
        </I18nProvider>
    );
};

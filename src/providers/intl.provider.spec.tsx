import { i18n } from '@lingui/core';

import { renderWrapper, waitFor } from '@/tests';

import { messages as enMessages } from '../locales/en/messages';
import { IntlProvider } from './intl.provider';

jest.mock('@lingui/core', () => {
    const originalModule = jest.requireActual('@lingui/core');
    return {
        ...originalModule,
        i18n: {
            ...originalModule.i18n,
            activate: jest.fn(),
            load: jest.fn(),
            on: jest.fn(),
        },
    };
});

describe('IntlProvider Component', () => {
    beforeAll(() => {
        i18n.load({ en: enMessages });
        i18n.activate('en');
    });

    it('should activate the default locale (en) if none is provided', async () => {
        renderWrapper(
            <IntlProvider>
                <div>Default Locale</div>
            </IntlProvider>,
        );

        await waitFor(() => expect(i18n.activate).toHaveBeenCalledWith('en'));
    });

    it('should activate the specified locale', async () => {
        const locale = 'en';

        renderWrapper(
            <IntlProvider locale={locale}>
                <div>Specific Locale</div>
            </IntlProvider>,
        );

        await waitFor(() => expect(i18n.activate).toHaveBeenCalledWith(locale));
    });

    it('should load the correct catalogs', async () => {
        renderWrapper(
            <IntlProvider locale="en">
                <div>Catalog Test</div>
            </IntlProvider>,
        );

        await waitFor(() => expect(i18n.load).toHaveBeenCalledWith({ en: enMessages }));
    });
});

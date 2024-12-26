import { i18n } from '@lingui/core';

import { renderWrapper, waitFor } from '@/tests';

import { messages as enMessages } from '../../locales/en/messages';

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
    beforeEach(() => {
        jest.spyOn(console, 'warn').mockImplementation(jest.fn());
    });

    beforeAll(() => {
        i18n.load({ en: enMessages });
        i18n.activate('en');
    });

    it('should activate the default locale (en) if none is provided', async () => {
        renderWrapper(
            <div>Default Locale</div>,
        );

        await waitFor(() => expect(i18n.activate).toHaveBeenCalledWith('en'));
    });

    it('should activate the default_locale (en) when no locale is provided', async () => {
        renderWrapper(
            <div>Default Locale</div>,
        );

        await waitFor(() => expect(i18n.activate).toHaveBeenCalledWith('en'));
    });

    it('should use the default locale if locale is explicitly undefined', async () => {
        renderWrapper(
            <div>Default Locale</div>,
            { locale: undefined },
        );

        await waitFor(() => expect(i18n.activate).toHaveBeenCalledWith('en'));
    });

    it('should use the default locale if locale is an empty string', async () => {
        renderWrapper(
            <div>Empty Locale</div>,
            { locale: '' },
        );

        await waitFor(() => expect(i18n.activate).toHaveBeenCalledWith('en'));
    });

    it('should activate the specified locale', async () => {
        const locale = 'en';

        renderWrapper(
            <div>Specific Locale</div>,
            { locale },
        );

        await waitFor(() => expect(i18n.activate).toHaveBeenCalledWith(locale));
    });

    it('should load the correct catalogs', async () => {
        const locale = 'en';

        renderWrapper(
            <div>Catalog Test</div>,
            { locale },
        );

        await waitFor(() => expect(i18n.load).toHaveBeenCalledWith({ en: enMessages }));
    });
});

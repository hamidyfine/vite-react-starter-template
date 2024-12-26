import { i18n } from '@lingui/core';

import { loadCatalog } from './i18n.service';

jest.mock('@lingui/core', () => ({
    i18n: {
        loadAndActivate: jest.fn(),
    },
}));

jest.mock('./locales/en/messages.po', () => ({
    messages: { hello: 'Hello' },
}), { virtual: true });

jest.mock('./locales/fr/messages.po', () => ({
    messages: { hello: 'Bonjour' },
}), { virtual: true });

describe('loadCatalog', () => {
    it('should load and activate the English locale', async () => {
        await loadCatalog('en');
        expect(i18n.loadAndActivate).toHaveBeenCalledWith({
            locale: 'en',
            messages: { hello: 'Hello' },
        });
    });

    it('should load and activate the French locale', async () => {
        await loadCatalog('fr');
        expect(i18n.loadAndActivate).toHaveBeenCalledWith({
            locale: 'fr',
            messages: { hello: 'Bonjour' },
        });
    });

    it('should throw an error for an unsupported locale', async () => {
        await expect(loadCatalog('unsupported-locale')).rejects.toThrow();
    });
});

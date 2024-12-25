import { i18n } from '@lingui/core';

export const loadCatalog = async (locale: string) => {
    const { messages } = await import(`./locales/${locale}/messages.po`);
    i18n.loadAndActivate({ locale, messages });
};

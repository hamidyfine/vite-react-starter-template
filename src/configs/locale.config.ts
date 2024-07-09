import { flatten } from 'flat';
import { ResolvedIntlConfig } from 'react-intl';

import { app } from '.';

const ls = app.locales.map((l) => l.locale);

const loadMessages = async () => {
    const loadedMessages: Record<string, ResolvedIntlConfig['messages']> = {};
    for (const locale of ls) {
        const button = await import(`../locales/${locale}/button.locale.json`);
        const common = await import(`../locales/${locale}/common.locale.json`);
        const form = await import(`../locales/${locale}/form.locale.json`);
        const message = await import(`../locales/${locale}/message.locale.json`);
        const vocab = await import(`../locales/${locale}/vocab.locale.json`);

        loadedMessages[locale] = flatten({
            ...common.default,
            ...vocab.default,
            ...button.default,
            ...form.default,
            ...message.default,
            ...vocab.default,
        });
    }

    return loadedMessages;
};

export const messages = await loadMessages();

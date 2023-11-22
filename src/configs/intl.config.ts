import { flatten } from 'flat';
import type { ResolvedIntlConfig } from 'react-intl';

import enTranslations from '../locales/en.json';
import faTranslations from '../locales/fa.json';

const messages: {[k: string]: ResolvedIntlConfig['messages']} = {
    en: flatten(enTranslations),
    fa: flatten(faTranslations),
};

const locales = Object.keys(messages);

const default_locale = 'en';

export {
    default_locale,
    locales,
    messages,
};

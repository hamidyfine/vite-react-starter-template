import enTranslations from './en.json';
import faTranslations from './fa.json';

const messages = {
    en: enTranslations,
    fa: faTranslations,
};

const locales = Object.keys(messages);

const default_locale = 'en';

export {
    default_locale,
    locales,
    messages,
};

import { defineConfig } from '@lingui/cli';

export default defineConfig({
    catalogs: [
        {
            exclude: ['src/components/trans/trans.tsx'],
            include: ['src'],
            path: '<rootDir>/src/locales/{locale}/messages',
        },
    ],
    locales: ['en'],
    sourceLocale: 'en',
});

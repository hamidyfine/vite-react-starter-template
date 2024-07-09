import type { MantineThemeOverride } from '@mantine/core';
import { createTheme, DEFAULT_THEME, mergeMantineTheme, px } from '@mantine/core';

const locale = localStorage.getItem('locale');

const font = locale === 'fa' ? 'Vazirmatn' : 'Roboto, sans-serif';

const theme_override: MantineThemeOverride = {
    fontFamily: font,
    headings: {
        fontFamily: font,
    },
};

const themeOverride = createTheme(theme_override);

const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

const breakpoints: Record<string, number> = {};
Object.keys(theme.breakpoints).forEach((bp: string) => {
    breakpoints[bp] = Number(px(theme.breakpoints[bp]));
});

export {
    breakpoints,
    theme,
};

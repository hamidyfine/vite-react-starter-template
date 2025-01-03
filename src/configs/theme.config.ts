import '@fontsource-variable/inter/index.css';
import '../assets/fonts/vazir/font-face.css';

import type { MantineThemeOverride } from '@mantine/core';
import { createTheme, DEFAULT_THEME, mergeMantineTheme, px } from '@mantine/core';

const locale = localStorage.getItem('locale');

const font = locale === 'fa' ? 'Vazirmatn' : '"Inter Variable", sans-serif';

const theme_override: MantineThemeOverride = {
    autoContrast: true,
    colors: {
        'danger': ['#FDE3EC', '#FAC8D4', '#F7ADBC', '#F492A4', '#F1778C', '#EE5C74', '#EF3463', '#C52A50', '#9B213E', '#70172C'],
        'dark': ['#E6E6E6', '#CCCCCD', '#B3B3B4', '#99999B', '#808081', '#666668', '#2A2C30', '#222326', '#19191C', '#111112'],
        'info': ['#E3F6F9', '#C8EEF3', '#ADE6ED', '#93DEE6', '#78D6E0', '#5DCEDA', '#42CBD8', '#35A3AD', '#287B82', '#1B5257'],
        'light': ['#FFFFFF', '#FBFBFC', '#F8F9FB', '#F6F7FA', '#F5F6F9', '#F3F4F8', '#F1F3F7', '#C1C2C4', '#909294', '#606162'],
        'primary': ['#EBEEFC', '#CDD8F9', '#AFC1F7', '#91AAF4', '#7394F1', '#557DEE', '#3068F4', '#2853C2', '#203E91', '#182960'],
        'secondary': ['#F0F2F8', '#E1E6F1', '#D3D9EB', '#C4CCE4', '#B6C0DE', '#A7B3D7', '#A8B5D2', '#868FAD', '#656889', '#434264'],
        'success': ['#E1F4EF', '#C4E9DF', '#A6DDCE', '#89D2BE', '#6BC7AE', '#4EBB9D', '#0FA684', '#0C846A', '#096250', '#064036'],
        'warning': ['#FDEFE1', '#FBDDC3', '#F9CAA6', '#F7B889', '#F5A56B', '#F3934E', '#F4A24D', '#C3823E', '#92612E', '#61411F'],
    },
    fontFamily: font,
    headings: {
        fontFamily: font,
    },
    luminanceThreshold: 0.46,
};

const themeOverride = createTheme(theme_override);

const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

const breakpoints: Record<string, number> = {};
Object.keys(theme.breakpoints).forEach((bp: string) => {
    breakpoints[bp] = Number(px(theme.breakpoints[bp]));
});

export {
    breakpoints,
    font,
    theme,
};

import type { MantineThemeOverride } from '@mantine/core';

const tokens = {
    font_family: 'Sofia Sans Variable, sans-serif',
} as const;

const theme: MantineThemeOverride = {
    fontFamily: tokens.font_family,
    headings: {
        fontFamily: tokens.font_family,
    },
};

export {
    theme,
    tokens,
};

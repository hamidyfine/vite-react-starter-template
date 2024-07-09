import { NativeSelect } from '@mantine/core';
import { useContext } from 'react';

import { app } from '../../configs';
import { intlContext } from '../../context';

const IntlSwitcher = () => {
    const { changeLocale, locale } = useContext(intlContext);

    const locales_options = app.locales.map((locale) => ({
        label: locale.title,
        value: locale.locale,
    }));

    const handleChangeLocale = (newLocale: string) => {
        localStorage.setItem('locale', newLocale);
        changeLocale?.(newLocale);
    };

    return (
        <NativeSelect
            data={locales_options}
            size="xs"
            value={locale}
            onChange={(e) => handleChangeLocale(e.target.value)}
        />
    );
};

export default IntlSwitcher;

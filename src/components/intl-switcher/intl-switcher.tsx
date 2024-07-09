import { useContext } from 'react';

import { locales } from '../../configs';
import { intlContext } from '../../context';

const LanguageSwitcher = () => {
    const { changeLocale, locale } = useContext(intlContext);

    const handleChangeLanguage = (newLocale: string) => {
        localStorage.setItem('locale', newLocale);
        changeLocale?.(newLocale);
    };

    return (
        <div>
            <label htmlFor="languageSelect">Select Language: </label>
            <select
                id="languageSelect"
                value={locale}
                onChange={(e) => handleChangeLanguage(e.target.value)}
            >
                {locales.map((loc) => (
                    <option
                        key={loc}
                        value={loc}
                    >
                        {loc}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;

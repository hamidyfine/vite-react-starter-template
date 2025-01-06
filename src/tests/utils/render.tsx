import { render as testingLibraryRender } from '@testing-library/react';

import { IntlProvider, QueryProvider, ThemeProvider } from '../../providers';

export const renderWrapper = (ui: React.ReactNode, { locale = 'en', theme = {} } = {}) => {
    return testingLibraryRender(
        <IntlProvider locale={locale}>
            <ThemeProvider {...theme} >
                <QueryProvider>
                    {ui}
                </QueryProvider>
            </ThemeProvider>
        </IntlProvider>,
    );
};

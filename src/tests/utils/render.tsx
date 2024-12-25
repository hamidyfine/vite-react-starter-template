import { render as testingLibraryRender } from '@testing-library/react';

import { IntlProvider } from '../../providers';

export const renderWrapper = (ui: React.ReactNode, { locale = 'en' } = {}) => {
    return testingLibraryRender(
        <IntlProvider locale={locale}>
            {ui}
        </IntlProvider>,
    );
};

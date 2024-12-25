import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react';

export const useTrans = () => {
    const { i18n } = useLingui();
    type TValues = Parameters<typeof i18n._>[1];

    return {
        i18n,
        macro: msg, // Defining messages
        trans: (id: string, values: TValues) => i18n._(id, values), // Fetching messages by ID
    };
};

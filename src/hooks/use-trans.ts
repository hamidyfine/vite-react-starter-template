import { useIntl } from 'react-intl';

export const useTrans = () => {
    const intl = useIntl();

    type TValues = Parameters<typeof intl.formatMessage>[1];

    return (alias: string, fallback?: string, type?: string, values?: TValues) => intl.formatMessage({
        defaultMessage: fallback,
        id: alias,
    }, {
        type: type ? intl.formatMessage({ defaultMessage: type, id: `vocab.${type}` }) : null,
        ...values,
    }) as string;
};

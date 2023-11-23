import { useIntl } from 'react-intl';

export const useTrans = () => {
    const { messages } = useIntl();

    return (alias: string) => String(messages[alias]) || '';
};

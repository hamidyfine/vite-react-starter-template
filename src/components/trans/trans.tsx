import { FormattedMessage } from 'react-intl';

interface IProps {
    alias: string;
    fallback: string;
}

const Trans = ({ alias, fallback, ...props }: IProps) => (
    <FormattedMessage
        defaultMessage={fallback}
        id={alias}
        {...props}
    />
);

export default Trans;

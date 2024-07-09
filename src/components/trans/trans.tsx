import { ComponentProps } from 'react';
import { FormattedMessage } from 'react-intl';

/**
 * @param fallback - default message
 * @param id - message id
 * @param type - vocab to use as type
 * @param props - FormattedMessage props
 */
interface IProps extends ComponentProps<typeof FormattedMessage> {
    fallback: string;
    id: string;
    type?: string;
}

const Trans = ({ fallback, id, type, ...props }: IProps) => {
    return (
        <FormattedMessage
            defaultMessage={fallback || type || 'undefined_translation'}
            id={id}
            values={{
                type: type ? <FormattedMessage id={`vocab.${type}`} /> : null,
                ...props.values,
            }}
            {...props}
        />
    );
};

export default Trans;

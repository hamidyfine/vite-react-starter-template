import type { PropsWithChildren } from 'react';

import { Trans } from '../trans';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Button = ({ children, ...props }: PropsWithChildren<any>) => {
    return (
        <button
            {...props}
            type="button"
        >
            <Trans
                components={{ 0: <code /> }}
                id="tgb"
            />
            {children}
        </button>
    );
};

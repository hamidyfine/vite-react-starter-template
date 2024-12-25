import { Trans as Tr } from '@lingui/react';
import { Trans as Macro } from '@lingui/react/macro';
import type { ComponentProps, PropsWithChildren } from 'react';

// Use to fetch catalog message by ID
export const Trans = (props: ComponentProps<typeof Tr>) => {
    return <Tr {...props} />;
};

// Use to create new catalog message
export const TransMacro = (props: PropsWithChildren<ComponentProps<typeof Macro>>) => {
    const { children } = props;

    return (
        <Macro {...props}>
            {children}
        </Macro>
    );
};

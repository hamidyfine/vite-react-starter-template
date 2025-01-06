import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { PropsWithChildren } from 'react';

import { client } from '@/configs';

export const QueryProvider = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={client}>
            {children}
            <ReactQueryDevtools
                buttonPosition="bottom-left"
                initialIsOpen={false}
            />
        </QueryClientProvider>
    );
};

import { MantineTheme, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';

export const useThemeToken = (key?: keyof MantineTheme) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [value, setValue] = useState<any>();
    const [error, setError] = useState<string | null>();
    const tokens = useMantineTheme();

    useEffect(() => {
        if (key) {
            const token = tokens[key as keyof typeof tokens];
            // eslint-disable-next-line no-extra-boolean-cast
            if (!!token) {
                setValue(token);
            } else {
                setError(`Token with key ${key} not found`);
            }
        }
    }, [key, tokens]);

    if (!key) {
        return {
            tokens,
        };
    }

    return {
        error,
        tokens,
        value,
    };
};

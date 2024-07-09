import { useEffect, useState } from 'react';

import { tokens } from '../configs';

export const useThemeToken = (key: string) => {
    const [value, setValue] = useState<string | null>();
    const [error, setError] = useState<string | null>();

    useEffect(() => {
        if (key) {
            const token = tokens[key as keyof typeof tokens];
            if (token) {
                setValue(token);
            } else {
                setError(`Token with key ${key} not found`);
            }
        }
    }, [key]);

    return {
        error,
        value,
    };
};

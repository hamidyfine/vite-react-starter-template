import { Outlet } from '@tanstack/react-router';
import { Suspense } from 'react';

export const DefaultLayout = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
    );
};

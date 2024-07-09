import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { routes } from '../routes';

const router = createBrowserRouter(routes);

export const RouteProvider = () => {
    return (
        <RouterProvider router={router} />
    );
};

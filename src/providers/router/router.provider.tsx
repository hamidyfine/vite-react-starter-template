import { createRouter, RouterProvider as TanStackRouter } from '@tanstack/react-router';
import type { PropsWithChildren } from 'react';
import { lazy, Suspense } from 'react';

import { routeTree } from '../../router/route-tree.gen';

const router = createRouter({
    defaultPreload: 'intent',
    routeTree,
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
      ? () => null
      : lazy(() =>
          import('@tanstack/router-devtools').then((res) => ({
              default: res.TanStackRouterDevtools,
          })),
      );

export const RouterProvider = ({ children }: PropsWithChildren) => {
    return (
        <>
            <TanStackRouter router={router} />
            {children}
            <Suspense>
                <TanStackRouterDevtools
                    initialIsOpen={false}
                    position="bottom-right"
                    router={router}
                />
            </Suspense>
        </>
    );
};

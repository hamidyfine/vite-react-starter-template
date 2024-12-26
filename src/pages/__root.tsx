import { createRootRoute,Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    return (
        <>
            <div className="p-2 flex gap-2 text-lg">
                <Link
                    activeOptions={{ exact: true }}
                    to="/"
                    activeProps={{
                        className: 'font-bold',
                    }}
                >
                    Home
                </Link>{' '}
                <Link
                    to="/about"
                    activeProps={{
                        className: 'font-bold',
                    }}
                >
                    About
                </Link>{' '}
                <Link
                    to="/dashboard"
                    activeProps={{
                        className: 'font-bold',
                    }}
                >
                    Dashboard
                </Link>
                <Link
                    to="/dashboard/profile"
                    activeProps={{
                        className: 'font-bold',
                    }}
                >
                    Profile
                </Link>
            </div>
            <hr />
            <Outlet />
            <TanStackRouterDevtools position="bottom-right" />
        </>
    );
}

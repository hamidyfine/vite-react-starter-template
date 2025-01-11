import { createRootRoute, Link, Outlet } from '@/router';

export const Route = createRootRoute({
    component: RootComponent,
});

function RootComponent() {
    // This is the root component for the application.
    // It will be rendered on every page.
    // Uncomment this if you do NOT want to render any components (like the navigation links) on every page.
    // Remove the second return if uncomment this one.
    // return <Outlet />;

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
        </>
    );
}

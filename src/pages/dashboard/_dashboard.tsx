import { createFileRoute, Outlet } from '@/router';

export const Route = createFileRoute('/dashboard/_dashboard')({
    component: LayoutDefault,
});

function LayoutDefault() {
    return (
        <>
            <div>Hello _dashboard Layout!</div>
            <Outlet />
        </>
    );
}

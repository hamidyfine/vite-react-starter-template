import { createFileRoute, Outlet } from '@/router';

export const Route = createFileRoute('/_index/_index')({
    component: IndexLayout,
});

function IndexLayout() {
    return (
        <div className="p-2">
            <h3>Welcome Home Layout!</h3>
            <Outlet />
        </div>
    );
}

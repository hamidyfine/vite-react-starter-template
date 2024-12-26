import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/_dashboard/profile/')({
    component: Profile,
});

function Profile() {
    return <div>Hello Dashboard Profile!</div>;
}

import { createFileRoute } from '@/router';

export const Route = createFileRoute('/_index/_index/')({
    component: Home,
});

function Home() {
    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
        </div>
    );
}

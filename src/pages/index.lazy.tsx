import { createLazyFileRoute } from '@tanstack/react-router';

import { Icon } from '@/components';

export const Route = createLazyFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
            <Icon
                name="house"
                size={24}
                strokeWidth={1.5}
            />
        </div>
    );
}

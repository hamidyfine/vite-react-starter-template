import { createLazyFileRoute } from '@/router';

export const Route = createLazyFileRoute('/_index/_index/about')({
    component: About,
});

function About() {
    return <div className="p-2">Hello from About!</div>;
}

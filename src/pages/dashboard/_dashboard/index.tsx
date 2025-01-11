import { createFileRoute } from '@/router';

import { Trans, TransMacro } from '../../../components';
import { useStoreGlobal } from '../../../stores';

export const Route = createFileRoute('/dashboard/_dashboard/')({
    component: Home,
});

function Home() {
    const bears = useStoreGlobal((state) => state.bears);
    const increasePopulation = useStoreGlobal(
        (state) => state.increasePopulation,
    );

    return (
        <div>
            <p>Hello Dashboard Home inside Layout!</p>
            <button
                type="button"
                onClick={increasePopulation}
            >
                one up
            </button>
            <h1>🐻 {bears}</h1>
            <p>
                <TransMacro id="tgb">
                    Edit <code>src/App.tsx</code> and save to test HMR
                </TransMacro>
            </p>
            <p>
                <Trans
                    components={{ 0: <code /> }}
                    id="tgb"
                />
            </p>
        </div>
    );
}

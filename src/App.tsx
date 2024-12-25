import { Trans, TransMacro } from './components';
import { useAppStores } from './stores/app.store';

const App = () => {
    const bears = useAppStores((state) => state.bears);
    const increasePopulation = useAppStores((state) => state.increasePopulation);

    return (
        <>
            <button
                type="button"
                onClick={increasePopulation}
            >
                one up
            </button>
            <h1>🐻 {bears}</h1>
            <p>
                <TransMacro id="tgb">Edit <code>src/App.tsx</code> and save to test HMR</TransMacro>
            </p>
            <p>
                <Trans
                    components={{ 0: <code /> }}
                    id="tgb"
                />
            </p>
        </>
    );
};

export default App;

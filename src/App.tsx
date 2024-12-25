import { Trans, TransMacro } from './components';

const App = () => {
    return (
        <>
            <p>
                <TransMacro id="tgb">Edit <code>src/App.tsx</code> and save to test HMR</TransMacro>
            </p>
            <p>
                <Trans
                    components={{ 0: <code /> }}
                    id="tgb"
                />
            </p>
            <p>
                <TransMacro id="test">New Trans to test watcher!</TransMacro>
            </p>
            <p>
                <TransMacro>Another New Trans to test watcher!</TransMacro>
            </p>
            <p>
                <Trans id="test" />
            </p>
        </>
    );
};

export default App;

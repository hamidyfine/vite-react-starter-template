import './App.scss';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';

const App = () => {
    return (
        <>
            <div>
                <a
                    href="https://vite.dev"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img
                        alt="Vite logo"
                        className="logo"
                        src={viteLogo}
                    />
                </a>
                <a
                    href="https://react.dev"
                    rel="noreferrer"
                    target="_blank"
                >
                    <img
                        alt="React logo"
                        className="logo react"
                        src={reactLogo}
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <p>
          Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
        Click on the Vite and React logos to learn more
            </p>
        </>
    );
};

export default App;

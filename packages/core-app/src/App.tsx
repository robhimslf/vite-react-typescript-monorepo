import type { FC } from 'react';
import {
    useCallback,
    useEffect,
    useMemo,
    useState
} from 'react';
import { greet } from '@example/core-entities';
import { Button } from '@example/core-components';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const App: FC = () => {

    /**
     * Track the button click count.
     */
    const [ count, setCount ] = useState<number>( 0 );

    /**
     * Memoized count button label based on the state of `count`.
     */
    const countButtonLabel = useMemo<string>(
        () => `Clicked ${count} times`,
        [ count ]
    );

    /**
     * Handles the count button click by incrementing `count`.
     */
    const onCountClick = useCallback( () => {
        setCount( count + 1 );
    }, [ count, setCount ]);

    /**
     * On load, greet the user through the browser console.
     */
    useEffect( () => {
        greet( 'world' );
    }, [] );

    return (
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

            <h1>Vite + React (TypeScript) Monorepo</h1>
            <div className="card">
                <Button
                    label={ countButtonLabel }
                    onClick={ onCountClick }
                />
            </div>

            <p className="read-the-docs">
                Click on the Vite and React logos to learn more.
            </p>
        </div>
    );
};

export default App

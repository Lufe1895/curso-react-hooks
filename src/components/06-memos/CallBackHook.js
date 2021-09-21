import React, { useCallback, useEffect, useState } from 'react';
import '../02-useEffects/effects.css'
import { ShowIncrement } from './ShowIncrement';

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    const increment = useCallback(() => {
        setCounter(c => c + 1);
    }, [setCounter]);

    return (
        <div>
            <h1>UseCallbackHook: { counter }</h1>
            <br />

            <ShowIncrement increment={ increment } />
        </div>
    )
}

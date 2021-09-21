import React, { useRef, useLayoutEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css';

export const Layout = () => {
    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];
    const [boxSize, setBoxSize] = useState({});

    const pTag = useRef();

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
    
    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />
            
            <blockquote className="blockquote text-right" >
                <p 
                        className="mb-0"
                        ref={ pTag }
                >
                    { quote }
                </p><br />
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3)}
            </pre>
            
            <button 
                    className="btn btn-primary"
                    onClick={ increment }        
            >Siguiente Frase ►</button>
            
        </div>
    )
}

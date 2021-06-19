import React, {useEffect, useState, useMemo} from 'react';
import '../containers/App.css';
import {FunctionalChild} from "./FunctionalChild";
import {MemoizedFunctionalChild} from "./MemoizedFunctionalChild";
import {useDocumentTitle} from "../hooks/useDocumentTitle";

export const FunctionalParent = () => {
    const [count, setCount] = useState(0);
    const [showHeader, setShowHeader] = useState(true);
    const [title, setTitle] = useState('Hello Student!');

    // custom Hook to change the Title of the window (browser)
    const documentTitle = `You clicked ${count} times`
    useDocumentTitle(documentTitle);

    const style = {
        backgroundColor: 'transparent',
        font: 'inherit',
        padding: '8px',
        cursor: 'pointer',
        border: '1px solid blue'
    }

    // increment count value by one using setCount
    const handleIncrement = () => {
        setCount(count + 1);
    }

    // decrement count value by one using setCount
    const handleDecrement = () => {
        setCount(count - 1);
    }

    // handle header view using a boolean
    const handleHeader = () => {
        setShowHeader(!showHeader);
    }

    // It will be called in every render.
    useEffect(() => {
        console.log('FunctionalParent render');
    });

    // run right after the first render to DOM
    useEffect(() => {
        console.log("FunctionalParent - componentDidMount");
    }, [])

    // run after every render when count changes.
    useEffect(() => {
        console.log("FunctionalParent - useEffect", count);
    }, [count])

    useEffect(() => {
        // It will be called before unmounting.
        return () => {
            console.log('FunctionalParent - componentWillUnmount');
        };
    }, []);

   // let memoizedHeader = null;

    //useMemo replace shouldComponentUpdate in life cycle hooks
   // let memoizedHeader = <MemoizedFunctionalChild title={title}/>

   let memoizedHeader = useMemo(()=> {
        return <MemoizedFunctionalChild title={title}/>
    }, [title])

    let myHeader;
    if (showHeader) myHeader = <FunctionalChild title={title}/>;
    else myHeader = (<div/>);

    return (
        <div className="App">
            {myHeader}
            {memoizedHeader}
            <p>Count : {count}</p>
            <h1>Hi, Welcome to React Hooks Demo</h1>
            <div style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: 'center',
                width: '100%'
            }}>
                <button style={{...style, marginRight: '10%'}} onClick={handleIncrement}>Increment</button>
                <button style={{...style, marginRight: '10%'}} onClick={handleDecrement}>Decrement</button>
                <button style={style} onClick={handleHeader}>Unmount/Mount</button>
            </div>
        </div>
    )
}
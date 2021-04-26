import React, {useEffect, useState} from "react";

export const MemoizedFunctionalChild = (props) => {

    const [title, setTitle] = useState(props.title);

    // It will be called in every render.
    useEffect(() => {
        console.log('MemoizedFunctionalChildFunctionalChild render, title -> ', title);
    });

    useEffect(() => {
        // It will be called right after fist render.
        console.log('MemoizedFunctionalChildFunctionalChild - componentDidMount');
    }, []);


    useEffect(() => {
        // It will be called before unmounting.
        return () => {
            console.log('MemoizedFunctionalChildFunctionalChild - componentWillUnmount');
        };
    }, []);

    return (
        <h1 style={{backgroundColor: 'gray'}}>MemoizedFunctional Child: - {title}</h1>
    );
}
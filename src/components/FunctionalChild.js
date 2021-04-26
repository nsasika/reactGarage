import React, {useEffect, useState} from "react";

export const FunctionalChild = (props) => {

    const [title, setTitle] = useState(props.title);

    // It will be called in every render.
    useEffect(() => {
        console.log('FunctionalChild render, title -> ', title);
    });

    useEffect(() => {
        // It will be called right after fist render.
            console.log('FunctionalChild - componentDidMount');
    }, []);


    useEffect(() => {
        // It will be called before unmounting.
        return () => {
            console.log('FunctionalChild - componentWillUnmount');
        };
    }, []);

    return (
        <h1 style={{backgroundColor: 'gray'}}>Functional Child: - {title}</h1>
    );
}
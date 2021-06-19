import React, {useEffect, useState} from "react";
import useWindowWidth from "../hooks/useWindowWidth";

export const FunctionalChild = (props) => {

    //const onSmallScreen = useWindowWidth();

    //console.log("onSmallScreen", onSmallScreen)

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
import React, {Component} from "react";

export class Child extends Component {

    constructor(props) {
        super(props);
        this.state ={
            title: props.title
        }
        console.log("* - Child constructor, state:->", this.state, ", props", props)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("* - Child shouldComponentUpdate")
        return false;
    }

    // A valid state object (or null) must be returned
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("* - Child getSnapshotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("* - Child componentDidUpdate")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("* - Child getDerivedStateFromProps, state:->", state," props:->", props)
        return null;
        //return {title: "Bye Covid for now !"};
    }

    componentDidMount() {
        console.log("* - Child componentDidMount, state:->", this.state)
    }

    //The componentWillUnmount method is called when the component is about to be removed from the DOM.
    componentWillUnmount() {
        console.log("* - Child componentWillUnmount")
    }

    render() {
        console.log("* - Child render")
        return (
            <h1 style={{backgroundColor: 'gray'}}>{this.state.title}</h1>
        );
    }
}
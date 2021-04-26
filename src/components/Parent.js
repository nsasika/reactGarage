import React, {Component} from 'react';
import '../containers/App.css';
import {Child} from "./Child";

class Parent extends Component {
    /*
    *The constructor() method is called before anything else

    *The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else,
    this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

    */
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            showHeader: true
        }
        console.log("1 - Parent Constructor, state:->", this.state," props:->", props);
    }

    /* A valid state object (or null) must be returned

    *  declared static to discourage any side-effects during the render phase
    */
    static getDerivedStateFromProps(props, state) {
        console.log("2 - Parent getDerivedStateFromProps, state:->", state," props:->", props)
        return null;
    }

    /* Mounting phase method - is triggered automatically after a component is successfully mounted and rendered for the first time

     This could be achieved by useEffect Hook - using an empty array argument
    * */
    componentDidMount() {
        console.log("4 - Parent componentDidMount, state:->", this.state)
    }

    /*
    * Stop the component from rendering at any update: return boolean value
    * */
    shouldComponentUpdate(nextProps, nextState){
        console.log("Parent shouldComponentUpdate")
        return true;
    }

    /**
     * It enables your component to capture some information from the DOM before it is potentially changed

     * Any value returned by this lifecycle method will be passed as a parameter to componentDidUpdate().
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Parent getSnapshotBeforeUpdate, Before the update, the count was " + prevState.count + ", state:->", this.state)
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Parent componentDidUpdate, The updated, the count is " + this.state.count, snapshot)
    }

    componentWillUnmount() {
        console.log("Parent componentWillUnmount, state:->", this.state)
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count-1
        })
    }

    handleHeader = () => {
        this.setState({
            showHeader: !this.state.showHeader
        })
    }

    /*
    * This is a required method and is the method that actually outputs the HTML to the DOM.
    *
    * */

    render() {
        console.log("3 - Parent render, state:->", this.state)

        const style = {
            backgroundColor: 'transparent',
            font: 'inherit',
            padding: '8px',
            cursor: 'pointer',
            border: '1px solid blue'
        }

        let myHeader;
        if (this.state.showHeader) myHeader = <Child title="Hello Child!" />;
        else myHeader = (<div/>);

        return (
            <div className="App">
                {myHeader}
                <h1>Hi, Welcome to Life Cycle Hooks Demo</h1>
                <p>Count : {this.state.count}</p>
                <div style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <button style={{...style, marginRight: '10%'}} onClick={this.handleIncrement}>Increment</button>
                    <button style={{...style, marginRight: '10%'}} onClick={this.handleDecrement}>Decrement</button>
                    <button style={style} onClick={this.handleHeader}>Unmount/Mount</button>
                </div>
            </div>
        )
    }
}

export default Parent;

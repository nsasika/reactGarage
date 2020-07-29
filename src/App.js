import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons:[
            {name: "Sanath", age: "29"},
            {name: "Pramod", age: "28"},
            {name: "Madhawa", age: "32"}
        ],
        otherState: "Something else"
    }

    switchHandler = () => {
        //console.log("Was clicked!")
        this.setState({
            persons:[
                {name: "Max", age: "29"},
                {name: "Pramod", age: "28"},
                {name: "Madhawa", age: "70"}
            ]
        })
        // DO NOT use this way..state doesn't replace new state values
        //this.state.person[0].name = "Max"

        /* whenever state and props (these 2 affects the re-rendering) changes this re-renders and update the DOM.state is mutate and it merges the new
        changes in state while comparing with previous state and new state.when re-renders the props also will be
        get updated.state management use in class based components.
        * */
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React Application</h1>
                <p>This is Really Working !</p>
                <button onClick={this.switchHandler}>Switch Name</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Having two childeren !</Person>
                <Person name={this.state.persons[2].name}age={this.state.persons[2].age}/>
            </div>
        );

        /*return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi, I\'m a React Application'))
        * this is the reason why we use JSX in react.this createElement method may be much complex and hard to use
        * */
    }
}

export default App;

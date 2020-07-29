import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons:[
            {name: "Sanath", age: "29"},
            {name: "Pramod", age: "28"},
            {name: "Madhawa", age: "32"}
        ]
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React Application</h1>
                <p>This is Really Working !</p>
                <button>Switch Name</button>
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

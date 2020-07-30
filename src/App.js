import React, {useState, Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            {name: "Nalin", age: "29"},
            {name: "Pramod", age: "28"},
            {name: "Madhawa", age: "70"}
        ],
        otherState: "Other State"
    }

    // const [ personState, setPersonState ] = useState({
    //     persons:[
    //         {name: "Sanath", age: "29"},
    //         {name: "Pramod", age: "28"},
    //         {name: "Madhawa", age: "32"}
    //     ],
    //     otherState: "Something else"})
    //
    // const [otherState, setOtherState] =  useState("Something else")

    //console.log(personState,otherState)

    switchHandler = (newName) => {
        //passing a function using bind method and arrow key function.arrow key method may re-render more and will
        // cause some problems
        this.setState({
            persons: [
                {name: newName, age: "29"},
                {name: "Pramod", age: "28"},
                {name: "Madhawa", age: "70"}
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React Application</h1>
                <p>This is Really Working !</p>
                <button onClick={() => this.switchHandler("Isuru")}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}
                />
                <Person
                    click={this.switchHandler.bind(this, "Chale")}
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}>
                    Having two childeren !
                </Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}
                />
            </div>
        )
    }
}

export default App;

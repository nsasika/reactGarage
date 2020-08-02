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
        otherState: "Other State",
        showPerson: false
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

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: "Nadeera", age: "15"},
                {name: event.target.value, age: "28"},
                {name: "Nadeeka", age: "14"}
            ]
        })
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson
        this.setState(
            {
                showPerson: !doesShow
            })
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            padding: '8px',
            cursor: 'pointer',
            border: '1px solid blue'
        }

        let persons = null;

        // we could use js inside curly braces everytime.below is an example where we use map() function to loop over
        //persons array and return jsx object array to render

        if (this.state.showPerson) {
            persons = (
                <div>
                    {/*<Person*/}
                    {/*    name={this.state.persons[0].name}*/}
                    {/*    age={this.state.persons[0].age}*/}
                    {/*/>*/}
                    {/*<Person*/}
                    {/*    click={this.switchHandler.bind(this, "Chale")}*/}
                    {/*    name={this.state.persons[1].name}*/}
                    {/*    age={this.state.persons[1].age}*/}
                    {/*    changed={this.nameChangedHandler}>*/}
                    {/*    Having two childeren !*/}
                    {/*</Person>*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[2].name}*/}
                    {/*    age={this.state.persons[2].age}*/}
                    {/*/>*/}

                    {this.state.persons.map(persons => {
                        return (
                            <Person
                                name={persons.name}
                                age={persons.age}
                            />
                        )
                    })}
                </div>)
        }

        return (
            <div className="App">
                <h1>Hi, I'm a React Application</h1>
                <p>This is Really Working !</p>
                <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
                {persons}
            </div>
        )
    }
}

export default App;

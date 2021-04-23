import React, { Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'

class App extends Component {

   /* The constructor() method is called before anything else, when the component is initiated, 
      and it is the natural place to set up the initial state and other initial values.*/
    constructor(props) {
        super(props);
        //mutate and use a new copy of state - this is the good practice to avoid complications
        this.state = {
            persons: [
                { id: '1', name: "John", age: "36" },
                { id: '2', name: "Joe", age: "27" },
                { id: '3', name: "Michael", age: "32" }
            ],
            otherState: "Other State",
            showPerson: false,
            country: 'USA'
        }
        console.log("Constructor of App class, state", this.state);
    }

    UNSAFE_componentWillMount() {
        console.log("componentWillMount of App class")
    }

    componentDidMount() {
        console.log("componentDidMount of App class")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps of App class, props", props, "state ", state)
        if(state.country !== props.country) return {country: props.country}
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        })

        //mutate and use a new copy of persons from state - this is the good practice to avoid complications
        const person = {
            ...this.state.persons[personIndex]
        }

        person.name = event.target.value

        //mutate persons and replace with personIndex
        const persons = [...this.state.persons]
        persons[personIndex] = person

        this.setState({
            persons: persons
        })
    }

    deleteNameHandler = (personIndex) => {
        //const persons = this.state.persons.splice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1)
        this.setState({ persons: persons })
        //no need to assign to a new const when slicing persons - natural behavior of js
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPerson
        this.setState(
            {
                showPerson: !doesShow
            })
    }

    handleOnClick = () => {
        this.setState({ showPerson: !this.state.showPerson })
    }

    render() {

        console.log("render class App", this.state)

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            padding: '8px',
            cursor: 'pointer',
            border: '1px solid blue'
        }

        let persons = null;

        // when using map() function you could use the second argument index to refer the looping index element

        if (this.state.showPerson) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        click={this.deleteNameHandler}
                        changed={this.nameChangedHandler}
                    />
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

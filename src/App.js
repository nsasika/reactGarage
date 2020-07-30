import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const app = (props) =>  {

    const [ personState, setPersonState ] = useState({
        persons:[
            {name: "Sanath", age: "29"},
            {name: "Pramod", age: "28"},
            {name: "Madhawa", age: "32"}
        ],
        otherState: "Something else"})

    const [otherState, setOtherState] =  useState("Something else")

    console.log(personState,otherState)

    const switchHandler = () => {
        //console.log("Was clicked!")
        setPersonState({
            persons:[
                {name: "Max", age: "29"},
                {name: "Pramod", age: "28"},
                {name: "Madhawa", age: "70"}
            ],
            otherState: personState.otherState
        })
    }
        return (
            <div className="App">
                <h1>Hi, I'm a React Application</h1>
                <p>This is Really Working !</p>
                <button onClick={switchHandler}>Switch Name</button>
                <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
                <Person name={personState.persons[1].name} age={personState.persons[1].age}>Having two childeren !</Person>
                <Person name={personState.persons[2].name}age={personState.persons[2].age}/>
            </div>
        );
}

export default app;

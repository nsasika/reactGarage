import React from 'react'
import Person from './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm a Person called {props.name} and I am {props.age} years Old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

/*here we passed props and children.we passed children where it may be a text,list or any object.see the inspect to see
* the props.children in browser.
* normaly use lowerCase names to name components(starting with lCase)
* */

export default person;
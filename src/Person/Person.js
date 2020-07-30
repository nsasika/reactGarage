import React from 'react'

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm a Person called {props.name} and I am {props.age} years Old</p>
            <p>{props.children}</p>
        </div>
    )
}

/*here we passed props and children.we passed children where it may be a text,list or any object.see the inspect to see
* the props.children in browser.
* normaly use lowerCase names to name components(starting with lCase)
* */

export default person;
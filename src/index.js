import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {FunctionalParent} from "./components/FunctionalParent";
import Parent from "./components/Parent";
import App from './App';

const updateTime = () =>  {
    const VirtualDOM = (
        <div>
            <h1>Example of Virtual DOM Rendering</h1>
            <h1>Hello World!</h1>
            <h1>Now the time is</h1>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    )
    // renders component VirtualDOM to the index.html's( inside public folder) div of id root
    ReactDOM.render(VirtualDOM,
        document.getElementById('root')
    );
}

// calls the function updateTime in every 2 seconds (2000 milliseconds):
//setInterval(updateTime, 2000);


ReactDOM.render(<App/>, document.getElementById('root'));


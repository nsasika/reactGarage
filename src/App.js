import React from "react";
import "./App.css";
import { FunctionalParent } from "./components/FunctionalParent";
import Hello from "./components/Hello/Hello";
import { HelloES6} from "./components/Hello/Hello";
import Parent from "./components/Parent";
import Person from "./components/Person/Person";
import "./components/Person/Person.css";
import {ReactTable} from './components/Table/ReactTable'


const App = () => {
  return (
    <div>
      <Hello/>
    </div>
  );
};

export default App;

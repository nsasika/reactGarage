import React, {Component} from 'react';

// using function keyword

// function Person(props) {
//     return (
//       <div className="person">
//        <h1>{props.name}</h1>
//        <p>Your Age: {props.age}</p>
//      </div>
//     );
//   }

// using ES6 - functional component

// const Person = ({name, age}) => {
//   return (
//     <div className="person">
//      <h1>{name}</h1>
//      <p>Your Age: {age}</p>
//    </div>
//   );
// }

//using class based component
class Person extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="person">
        <h1>{this.props.name}</h1>
        <p>Your Age: {this.props.age}</p>
        <p>Your City: {this.props.city}</p>
      </div>
    );
  }
}

export default Person;

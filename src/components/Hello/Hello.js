import React, { useState } from "react";
import "./Hello.css";
import logo from "../../assets/academy.png";

const style = {
  height: "70px",
  width: "70px",
};

//destructuring could be used in parameters - {name, message}
export const HelloES6 = (props) => {
  return (
    <div className="hello">
      <h1> {props.text} </h1>
      {props.message}
      <Logo/>
    </div>
  );
};

/*
HTML and component tags must always be closed < />
    
Some attributes like “class” become “className” (because class refers to JavaScript classes), “tabindex” becomes “tabIndex” and should be written camelCase
    
We can’t return more than one HTML element at once, so make sure to wrap them inside a parent tag:

*/

//valid functional Component
function Hello() {
  //normal string variables
  const text = `Nalin's Academy`;
  //could use Elements as variable as well
  const message = <h1>React is cool!</h1>;

  const [isLogVisible, setIsLogoVisible] = useState(false);

  const handleOnClick = () => {
    setIsLogoVisible(!isLogVisible);
  };

  const style = {
    flexDirection: "row",
  };

  return (
    <div className="hello">
      <h1>Welcome to Functional Components - {text}</h1>
      {message}
      <button onClick={handleOnClick}>Show Hide Logo</button>
    </div>
  );
}

//stateless component
const Logo = () => <img src={logo} alt="Logo" style={style} />;

export default Hello;

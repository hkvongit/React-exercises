import React from "react";
import Hoc from "./hoc";
const Counter = props => {
  return (
    <div>
        <button onClick={props.handleIncrement}>hai this is {props.count}</button>
        <button onClick = {props.resetCounter}>Reset</button>
    </div> 
  );
};

export default Hoc(Counter);

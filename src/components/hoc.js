import React, { useState } from "react";

const Hoc = WrappedComponent => {
  const NewComponent = ()=> {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + 1);
    };
    const resetCounter = () => {
        setCount(0);
      };
    return (
      <WrappedComponent count={count} handleIncrement={handleIncrement} resetCounter={resetCounter}/>
    );
  };
  return NewComponent;
};

export default Hoc;

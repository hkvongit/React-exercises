import React from 'react';
import propTypes from 'prop-types'
import ParentComponent from './components/ParentComponent'
const Test = (props) =>{
  return (
    <h1>{props.str}</h1>
  )
}

Test.propTypes ={
  str:propTypes.string
}

function App() {
  return (
    <div className="App">
      <Test str="hey dude"/>
      <ParentComponent / >
    </div>
  );
}

export default App;

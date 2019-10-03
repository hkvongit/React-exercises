import React from 'react';


function App() {
  let state = true
  let stateString = state.toString()
  const conditionalRender =() =>{
    if(state){
      return(
        <div>the state is {stateString}</div>
      )
    }else{
      return(
        <div>{stateString} state</div>
      )
    }
  }
  return (
    <div className="App">
      App
      {conditionalRender()}
    </div>
  );
}

export default App;

import React, { useState } from 'react'

export default function Counter({ appName, counterStart}) {
  const [counter, setCounter] = useState(counterStart);
  const [userInput, setUserInput] = useState(0);
  const [counterName, setCounterName] = useState(appName);
  return (
    <div className="App">
      <input 
        onChange={(e) => setCounterName(e.target.value)}>
      </input>
      <h1>{counterName}</h1>
      <h2>{counter}</h2>
      <input 
        onChange={(e) => setUserInput(Number(e.target.value))}>
      </input>

      {/* Add Button */}
      <button 
        onClick={() => setCounter((prevState) => prevState + userInput)}>
        Add by {userInput}
      </button>

      {/* Subtract Button */}
      {counter <= 0 ? '' : 
        <button onClick={() => setCounter((prevState) => prevState - userInput)}>
          Subtract by {userInput}
        </button>}
      <button 
        onClick={() => setCounter(0)}>
        Reset
      </button>
    </div>
  );
}

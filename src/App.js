import "./App.css";
import React, { useState } from "react";

function App() {
  console.log("APP-RENDERING");

  let [playerCounter1, setPlayerCounter1] = useState(10);
  let [playerCounter2, setPlayerCounter2] = useState(10);

  const decrement = () => {
    setPlayerCounter1((actual) => actual - 1);
    setPlayerCounter2((actual) => actual - 1);
  };

  return (
    <div className="App">
      <div className="gameWrapper">
        <div className="firstGamer">
          <div className="gamerName">Иван Иванович</div>
          <div className="gamerProgress">{playerCounter1}</div>
          <div className="incrementButton">
            <button
              onClick={() => {
                setPlayerCounter1((actual) => actual + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="secondGamer">
          <div className="gamerName">Пётр петров</div>
          <div className="gamerProgress">{playerCounter2}</div>
          <div className="incrementButton">
            <button
              onClick={() => {
                setPlayerCounter2((actual) => actual + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="decrementButton">
          <button onClick={decrement}>-</button>
          <button
            onClick={() => {
              setPlayerCounter1(10);
              setPlayerCounter2(10);
            }}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import React, { useState } from "react";

function findMax(users) {
  let maxPair = null;
  console.log("find users");
  for (let i = 0; i < users.length; i++) {
    if (maxPair === null) {
      maxPair = users[i];
    } else if (
      Math.max(users[i][0], users[i][1]) > Math.max(maxPair[0], maxPair[1])
    ) {
      maxPair = users[i];
    }
  }
  return maxPair;
}

function App({ users }) {
  let pair = findMax(users);
  if (pair === null) {
    pair = [10, 10];
  }

  // console.log("APP-RENDERING");

  let [playerCounter1, setPlayerCounter1] = useState(() => {
    let pair = findMax(users);
    if (pair === null) {
      return 10;
    }
    return pair[0];
  });
  let [playerCounter2, setPlayerCounter2] = useState(() => {
    let pair = findMax(users);
    if (pair === null) {
      return 10;
    }
    return pair[1];
  });

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

function App_() {
  console.log("APP-RENDERING");

  let [playerCounters, setPlayerCounters] = useState({
    c1: 10,
    c2: 10,
  });

  const decrement = () => {
    setPlayerCounters((actual) => {
      return { ...actual, c1: actual.c1 - 1, c2: actual.c2 - 1 };
    });
  };

  return (
    <div className="App">
      <div className="gameWrapper">
        <div className="firstGamer">
          <div className="gamerName">Иван Иванович</div>
          <div className="gamerProgress">{playerCounters.c1}</div>
          <div className="incrementButton">
            <button
              onClick={() => {
                setPlayerCounters((actual) => {
                  return { ...actual, c1: actual.c1 + 1 };
                });
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="secondGamer">
          <div className="gamerName">Пётр петров</div>
          <div className="gamerProgress">{playerCounters.c2}</div>
          <div className="incrementButton">
            <button
              onClick={() => {
                setPlayerCounters((actual) => {
                  return { ...actual, c2: actual.c2 + 1 };
                });
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
              setPlayerCounters((actual) => {
                return { ...actual, c1: 10, c2: 10 };
              });
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

import "./App.css";
import React, { useState } from "react";

function App() {
  let playerCounter1 = useState(10);
  let playerCounter2 = useState(10);

  return (
    <div className="App">
      <div className="gameWrapper">
        <div className="firstGamer">
          <div className="gamerName">Иван Иванович</div>
          <div className="gamerProgress">{playerCounter1}</div>
          <div className="incrementButton">
            <button>+</button>
          </div>
        </div>
        <div className="secondGamer">
          <div className="gamerName">Пётр петров</div>
          <div className="gamerProgress">{playerCounter2}</div>
          <div className="incrementButton">
            <button>+</button>
          </div>
        </div>
        <div className="decrementButton">
          <button>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;

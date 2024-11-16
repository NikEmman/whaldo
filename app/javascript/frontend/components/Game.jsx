import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "./GameContext";

export default function Game() {
  const [timer, setTimer] = useState(0);
  const { difficulty } = (useContext = { GameContext });

  const startTimer = () => {
    //TBI
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className="game">
      <main>
        <div className="gameNav">
          <div className="timer">10:12:07</div>
        </div>
        <div className="gameImage">
          <img
            src={`/images/${difficulty}.jpg`}
            alt="Image where Waldo is located"
          />
        </div>
      </main>
    </div>
  );
}

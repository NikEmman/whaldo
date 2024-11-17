import React, { useState, useEffect, useContext } from "react";
import { GameContext } from "./GameContext";
import Timer from "./Timer";

export default function Game() {
  const [stopTimer, setStopTimer] = useState(false);
  const [time, setTime] = useState(0);
  const { difficulty } = useContext(GameContext);
  const [coords, setCoords] = useState([0, 0]);

  const handleTimeUpdate = (currentTime) => {
    setTime(currentTime);
  };

  useEffect(() => {
    //fetchWaldoLocation(difficulty);
    // setCoords(fetchedCoords)
  }, [difficulty]);

  return (
    <div className="game">
      <main>
        <div className="gameNav">
          <Timer stopTimer={stopTimer} onTimeUpdate={handleTimeUpdate} />
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

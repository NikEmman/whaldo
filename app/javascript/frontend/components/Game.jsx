import React, { useState, useEffect, useContext, useRef } from "react";
import { GameContext } from "./GameContext";
import Timer from "./Timer";

export default function Game() {
  const [stopTimer, setStopTimer] = useState(false);
  const [time, setTime] = useState(0);
  const { difficulty } = useContext(GameContext);
  const [coords, setCoords] = useState([0, 0]);
  const [showFrame, setShowFrame] = useState(false);
  const timerRef = useRef();

  const handleCheckTime = () => {
    const currentTime = timerRef.current.getCurrentTime();
    setTime(currentTime);
  };

  useEffect(() => {
    //fetchWaldoLocation(difficulty);
    // setCoords(fetchedCoords)
  }, [difficulty]);

  const onImageClick = (event) => {
    const img = event.target;
    const rect = img.getBoundingClientRect();

    // Calculate the relative coordinates
    const relativeX =
      Math.round(((event.clientX - rect.left) / rect.width) * 100 * 100) / 100;
    const relativeY =
      Math.round(((event.clientY - rect.top) / rect.height) * 100 * 100) / 100;

    setCoords([relativeX, relativeY]);
  };

  return (
    <div className="game">
      <main>
        <div className="gameNav">
          <Timer stopTimer={stopTimer} ref={timerRef} />
        </div>
        <div className="gameImage">
          <img
            onClick={onImageClick}
            src={`/images/${difficulty}.jpg`}
            alt="Image where Waldo is located"
          />
        </div>
        <button onClick={handleCheckTime}>Check Time</button>
      </main>
    </div>
  );
}

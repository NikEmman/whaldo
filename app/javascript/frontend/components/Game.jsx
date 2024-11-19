import React, { useState, useEffect, useContext, useRef } from "react";
import { GameContext } from "./GameContext";
import Timer from "./Timer";
import { parseTime, formatTime } from "../utils";

export default function Game() {
  const [stopTimer, setStopTimer] = useState(false);
  const [time, setTime] = useState(0);
  const { difficulty } = useContext(GameContext);
  const [coords, setCoords] = useState([0, 0]);
  const [frameDisplay, setFrameDisplay] = useState(false);
  const timerRef = useRef();
  const [error, setError] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [solution, setSolution] = useState([62, 37.8]);

  const getTime = () => {
    const currentTime = timerRef.current.getCurrentTime();
    setTime(currentTime);
  };

  useEffect(() => {
    //fetchWaldoLocation(difficulty);
    // setCoords(fetchedCoords)
  }, [difficulty]);

  const errorMsg = error && <p className="error">Nope! Waldo is not here.</p>;

  const onImageClick = (event) => {
    setFrameDisplay(true);
    const img = event.target;
    const rect = img.getBoundingClientRect();
    setError(false);
    // Calculate the relative coordinates
    const relativeX =
      Math.round(((event.clientX - rect.left) / rect.width) * 100 * 100) / 100;
    const relativeY =
      Math.round(((event.clientY - rect.top) / rect.height) * 100 * 100) / 100;
    console.log(`x:${relativeX} , y:${relativeY}`);

    setCoords([relativeX, relativeY]);
  };

  const correctGuess = (clickedCoords, rightCoords) => {
    return (
      Math.abs(clickedCoords[0] - rightCoords[0]) <= 6 &&
      Math.abs(clickedCoords[1] - rightCoords[1]) <= 9
    );
  };

  const onCheckWaldoClick = () => {
    setFrameDisplay(false);
    if (correctGuess(coords, solution)) {
      getTime();
      setDisplayForm(true);
      setStopTimer(true);
    } else {
      setError(true);
    }
  };

  const frameStyle = {
    display: frameDisplay ? "block" : "none",
    top: `${coords[1] - 4.5}%`,
    left: `${coords[0] - 2.5}%`,
  };

  const buttonStyle = {
    display: frameDisplay ? "block" : "none",
    top: `${coords[1]}%`,
    left: `${coords[0] + 4.5}%`,
  };
  const gameStyle = displayForm
    ? {
        filter: "blur(10px)",
        pointerEvents: "none",
      }
    : {};
  return (
    <>
      <div className="game" style={gameStyle}>
        <main>
          <div className="gameNav">
            <Timer stopTimer={stopTimer} ref={timerRef} />
            {errorMsg}
          </div>
          <div className="gameImage">
            <img
              onClick={onImageClick}
              src={`/images/${difficulty}.jpg`}
              alt="Image where Waldo is located"
            />
            <div className="frame" style={frameStyle}></div>
            <button
              className="checkWaldo"
              style={buttonStyle}
              onClick={onCheckWaldoClick}
            >
              He's here!
            </button>
          </div>
        </main>
      </div>
      {displayForm && (
        <div className="modal">
          <h1>You found him!</h1>
          <p>
            Your time on {difficulty} difficulty was:
            {formatTime(parseTime(time))}
          </p>
          <form action="/" method="POST">
            <label htmlFor="name">Enter your name</label>
            <input type="text" name="name" id="name" placeholder="John Doe" />
            <button type="submit">Submit!</button>
          </form>
        </div>
      )}
    </>
  );
}

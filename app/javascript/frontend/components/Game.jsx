import React, { useState, useEffect, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "./GameContext";
import Timer from "./Timer";
import { formatTime } from "../utils";

export default function Game() {
  const [stopTimer, setStopTimer] = useState(false);
  const [time, setTime] = useState(0);
  const { difficulty, getTime, getName } = useContext(GameContext);
  const [coords, setCoords] = useState([0, 0]);
  const [frameDisplay, setFrameDisplay] = useState(false);
  const timerRef = useRef();
  const [error, setError] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [solution, setSolution] = useState([62, 37.8]);

  const getTimer = () => {
    const currentTime = timerRef.current.getCurrentTime();
    getTime(currentTime);
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
    // console.log(`x:${relativeX} , y:${relativeY}`);

    setCoords([relativeX, relativeY]);
  };

  const correctGuess = (clickedCoords, rightCoords) => {
    return (
      Math.abs(clickedCoords[0] - rightCoords[0]) <= 6 &&
      Math.abs(clickedCoords[1] - rightCoords[1]) <= 9
    );
  };
  const navigate = useNavigate();
  const leaderBoardRouter = () => {
    navigate("/leaderboard");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value || "Anonymous";
    getName(name);
    leaderBoardRouter();
  };
  const onCheckWaldoClick = () => {
    setFrameDisplay(false);
    if (correctGuess(coords, solution)) {
      getTimer();
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
            {formatTime(time)}
          </p>
          <form action="/" method="POST" onSubmit={handleFormSubmit}>
            <label htmlFor="name">Enter your name</label>
            <input type="text" name="name" id="name" placeholder="John Doe" />
            <button type="submit">Submit!</button>
          </form>
        </div>
      )}
    </>
  );
}

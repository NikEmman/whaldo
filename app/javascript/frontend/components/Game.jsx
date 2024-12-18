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
  const [solution, setSolution] = useState([]);

  const getTimer = () => {
    const currentTime = timerRef.current.getCurrentTime();
    getTime(currentTime);
    setTime(currentTime);
  };

  useEffect(() => {
    const url = `http://localhost:3000/api/solutions/${difficulty}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setSolution([data[0].x, data[0].y]);
        }
      })
      .catch((error) => console.error("Error fetching data", error));
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
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   const name = e.target.elements.name.value || "Anonymous";
  //   const difficulty = e.target.elements.difficulty.value;
  //   const time = e.target.elements.time.value;
  //   const allInputValues = { name: name, difficulty: difficulty, time: time };
  //   getName(name);
  //   let res = await fetch("http://localhost:3000/api/leaderboard", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(allInputValues),
  //   });
  //   leaderBoardRouter();
  // };
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value || "Anonymous";
    const difficulty = e.target.elements.difficulty.value;
    const time = e.target.elements.time.value;
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");
    const allInputValues = {
      leaderboard: { name: name, difficulty: difficulty, time: time },
    };
    getName(name);

    try {
      let res = await fetch("http://localhost:3000/api/leaderboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allInputValues),
      });
      if (res.ok) {
        leaderBoardRouter();
      } else {
        console.error("Failed to submit:", res.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
            Your time was:
            {" " + formatTime(time)}
          </p>
          <form action="/" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" placeholder="John Doe" />
            </div>
            <input type="hidden" name="difficulty" value={difficulty} />
            <input type="hidden" name="time" value={time} />
            <button type="submit">Submit!</button>
          </form>
        </div>
      )}
    </>
  );
}

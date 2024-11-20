import React, { useState, useRef } from "react";
import NavBar from "./components/NavBar";
import { GameContext } from "./components/GameContext";
import { Outlet } from "react-router-dom";

export default function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [time, setTime] = useState(0);

  const timerRef = useRef();
  const getTime = () => {
    const currentTime = timerRef.current.getCurrentTime();
    setTime(currentTime);
  };

  const onSelectDifficulty = (selection) => setDifficulty(selection);
  return (
    <>
      <GameContext.Provider
        value={{
          onSelectDifficulty,
          difficulty,
          getTime,
          time,
        }}
      >
        <NavBar />
        <Outlet />
      </GameContext.Provider>
    </>
  );
}

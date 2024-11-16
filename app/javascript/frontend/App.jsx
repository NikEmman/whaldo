import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { GameContext } from "./components/GameContext";
import { Outlet } from "react-router-dom";

export default function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [time, setTime] = useState(0);

  const onSelectDifficulty = (selection) => setDifficulty(selection);
  const getTime = (timeDone) => setTime(timeDone);
  return (
    <>
      <GameContext.Provider
        value={{
          onSelectDifficulty,
          time: time,
          getTime,
          difficulty: difficulty,
        }}
      >
        <NavBar />
        <Outlet />
      </GameContext.Provider>
    </>
  );
}

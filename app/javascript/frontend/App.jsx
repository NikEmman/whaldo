import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { GameContext } from "./components/GameContext";
import { Outlet } from "react-router-dom";

export default function App() {
  const [difficulty, setDifficulty] = useState("easy");

  const onSelectDifficulty = (selection) => setDifficulty(selection);
  return (
    <>
      <GameContext.Provider
        value={{
          onSelectDifficulty,
          difficulty: difficulty,
        }}
      >
        <NavBar />
        <Outlet />
      </GameContext.Provider>
    </>
  );
}

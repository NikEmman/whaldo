import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { GameContext } from "./components/GameContext";
import { Outlet } from "react-router-dom";

export default function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");

  const getTime = (time) => setTime(time);
  const getName = (name) => setName(name);

  const onSelectDifficulty = (selection) => setDifficulty(selection);
  return (
    <>
      <GameContext.Provider
        value={{
          onSelectDifficulty,
          difficulty: difficulty,
          getTime,
          getName,
          time: time,
          name: name,
        }}
      >
        <NavBar />
        <Outlet />
      </GameContext.Provider>
    </>
  );
}

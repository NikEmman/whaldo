import { createContext } from "react";

export const GameContext = createContext({
  onSelectDifficulty: () => {},
  getTime: () => {},
  time: 0,
  difficulty: "easy",
});

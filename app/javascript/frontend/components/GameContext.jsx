import { createContext } from "react";

export const GameContext = createContext({
  onSelectDifficulty: () => {},
  difficulty: "easy",
});

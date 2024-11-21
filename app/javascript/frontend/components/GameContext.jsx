import { createContext } from "react";

export const GameContext = createContext({
  onSelectDifficulty: () => {},
  difficulty: "easy",
  geTime: () => {},
  getName: () => {},
  time: 0,
  name: "",
});

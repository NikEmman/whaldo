import React from "react";
import App from "./App";
import Instructions from "./components/Instructions";
import ErrorPage from "../frontend/components/ErrorPage";
import LeaderBoard from "./components/LeaderBoard";
import Game from "./components/Game";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Instructions />,
      },
      {
        path: "leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "game",
        element: <Game />,
      },
    ],
  },
];

export default routes;

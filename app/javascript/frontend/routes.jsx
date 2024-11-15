import React from "react";
import App from "./App";
import Instructions from "./components/Instructions";
import ErrorPage from "../frontend/components/ErrorPage";
import LeaderBoard from "./components/LeaderBoard";

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
    ],
  },
];

export default routes;

import React, { useContext } from "react";
import { GameContext } from "./GameContext";

export default function LeaderBoard() {
  const { difficulty } = useContext(GameContext);

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="leaderboard">
      <h1>Leaderboard on {capitalize(difficulty)}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>10.13</td>
          </tr>
          <tr>
            <td>Joe Doe</td>
            <td>12.13</td>
          </tr>
          <tr>
            <td>Averel Doe</td>
            <td>14.14</td>
          </tr>
        </tbody>
      </table>

      <div>
        <h3>latest attempt</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Luke Bean</td>
              <td>12.01</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

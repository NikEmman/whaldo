import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameContext";
import { formatTime } from "../utils";

export default function LeaderBoard() {
  const { difficulty, time, name } = useContext(GameContext);
  const [data, setData] = useState([{ id: 1, name: "John", time: 36000 }]);

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    // fetch("/localhost/api/leaderboard")
    //   .then((response) => response.json())
    //   .then((data) => setData(data))
    //   .catch((error) => console.log(error));
  }, []);
  console.log(`time: ${time}, dif: ${difficulty}, name:${name}`);
  const tableRows = data ? (
    data.map((person) => {
      return (
        <tr key={person.id}>
          <td>{person.name}</td>
          <td>{formatTime(person.time)}</td>
        </tr>
      );
    })
  ) : (
    <tr>
      <td>No data</td>
      <td>No data</td>
    </tr>
  );
  return (
    <div className="leaderboard">
      <h1>Leaderboard on {capitalize(difficulty)}</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Time (h:m:s:ms)</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      {time !== 0 && (
        <div>
          <h3>Latest attempt</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Time (h:m:s:ms)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{formatTime(time)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameContext";
import { formatTime, capitalize } from "../utils";

export default function LeaderBoard() {
  const { difficulty, time, name } = useContext(GameContext);
  const [data, setData] = useState([{ id: 1, name: "John", time: 36000 }]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("/localhost/api/leaderboard")
    //   .then((response) => response.json())
    //   .then((data) => setData(data))
    //   .catch((error) => console.log(error));
    // setLoading(false);
  }, []);

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
      {loading ? (
        <>
          <h1>Loading...</h1>
          <div className="loader"></div>
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

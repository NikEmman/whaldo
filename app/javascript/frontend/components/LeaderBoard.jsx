import React from "react";

export default function LeaderBoard() {
  return (
    <>
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
      <table>
        <thead>
          <b>Latest attempt</b>
        </thead>
        <tbody>
          <td>Luke Bean</td>
          <td>12.01</td>
        </tbody>
      </table>
    </>
  );
}

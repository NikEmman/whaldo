import React from "react";
import { Link } from "react-router-dom";

export default function Instructions() {
  return (
    <>
      <h1>Hi from Instructions </h1>
      <ul>
        <li>instructions explained</li>
        <li>instructions explained</li>
        <li>instructions explained</li>
        <li>instructions explained</li>
      </ul>
      <Link to="game">Start Game</Link>
    </>
  );
}

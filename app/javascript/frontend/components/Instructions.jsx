import React from "react";
import { Link } from "react-router-dom";

export default function Instructions() {
  return (
    <>
      <h1> Welcome to Where's Waldo! </h1>
      <div>
        <h3>How to play:</h3>
        <ul>
          <li>
            Your goal is to find Waldo!
            <img
              className="sprite"
              src="/images/waldo_sprite.jpg"
              alt="waldo sprite"
            />
          </li>
          <li>
            When the game starts you will be shown an image and must click at
            the spot you think Waldo is.
          </li>
          <li>
            A square will be placed at that spot, and if Waldo is indeed there,
            you win!
          </li>
          <li>
            The timer will stop, and you may insert your name to the leader
            board
          </li>
          <li>
            You can select 3 difficulty settings, easy, medium and hard, each
            with it's own leader board
          </li>
          <li>Click Start Game to play!</li>
        </ul>
      </div>
      <div className="gameInit">
        <select name="difficulty" id="difficulty" defaultValue={"easy"}>
          <option value="easy">Easy</option>
          <option value="mid">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <Link to="game">Start Game</Link>
      </div>
    </>
  );
}

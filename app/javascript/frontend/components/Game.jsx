import React from "react";

export default function Game() {
  return (
    <div className="game">
      <main>
        <div className="gameNav">
          This is where char icons get displayed
          <div className="timer">10:12:07</div>
        </div>
        <div className="image">This is where image is rendered</div>
      </main>
      <section>
        <h3>This is section content</h3>
        <button>Sample button</button>
      </section>
    </div>
  );
}

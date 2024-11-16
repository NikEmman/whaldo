import React from "react";

export default function Game() {
  return (
    <div className="game">
      <main>
        <div className="gameNav">
          <img src="/images/waldo_sprite.jpg" alt="waldo sprite" />
          <div className="timer">10:12:07</div>
        </div>
        <div className="gameImage">
          <img src="/images/easy.jpg" alt="Easy Image" />
        </div>
      </main>
      <section>
        <h3>This is section content</h3>
        <button>Sample button</button>
      </section>
    </div>
  );
}

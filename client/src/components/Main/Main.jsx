import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <header className="main-header">
        <h1 className="main-title">SeaSavr</h1>
        <p className="main-description">
          A place where every small action makes a wave. 🌊 Join us in tracking
          and protecting our oceans — one story, one report, one dream at a
          time.
        </p>
      </header>

      <main className="flex flex-col gap-6">
        <a href="/report" className="main-link">
          Report Pollution
        </a>

        <a href="/map" className="main-link-alt">
          View Pollution Map
        </a>
      </main>

      <footer className="main-footer">
        🌎 Made with love by ocean dreamers.
      </footer>
    </div>
  );
};

export default Main;

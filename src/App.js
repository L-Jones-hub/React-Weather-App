import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Weather | Forecast</h1>
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by Lindsey Jones and is{" "}
          <a
            href="https://github.com/L-Jones-hub/React-Weather-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://candid-truffle-6c77cb.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

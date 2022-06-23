import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === `celsius`) {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} class="text-decoration-none">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemperature = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheitTemperature)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius} class="text-decoration-none">
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}

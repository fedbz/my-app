import React from "react";

export default function Forecast() {
  return (
    <div className="row third text-center" id="forecast">
      <div className="col">
        TUE
        <div className="weather-icon">☀️</div>
        <div className="small-temperature">7º|12º</div>
      </div>
      <div className="col">
        WED
        <div className="weather-icon">☀️</div>
        <div className="small-temperature">7º|12º</div>
      </div>
      <div className="col">
        THU
        <div className="weather-icon">🌤</div>
        <div className="small-temperature">7º|12º</div>
      </div>
      <div className="col">
        FRI
        <div className="weather-icon">🌥</div>
        <div className="small-temperature">7º|12º</div>
      </div>
      <div className="col">
        SAT
        <div className="weather-icon">☀️</div>
        <div className="small-temperature">7º|12º</div>
      </div>
    </div>
  );
}

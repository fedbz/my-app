import React from "react";
import ReadingGirl from "./reading-girl.png";

export default function CurrentWeather() {
  return (
    <div className="row second pt-3 pb-3">
      <div className="col">
        <div className="date-time small" id="date_time" />
        <div id="description" />
        <h1>
          <span id="city" /> Rome <span id="temp-digit" />
          <span className="degrees">19 ºC</span>
        </h1>
      </div>

      <div className="col text-center">
        <span className="big-icon" role="img" aria-label="sun">
          ☀️
        </span>
        {/*<img src="" alt="" id="icon" />*/}
      </div>

      <div className="col">
        <div className="humidity small">
          Humidity: <span id="humidity" />
          20%
        </div>
        <div className="wind small">
          Wind: <span id="wind" /> 10km/h
        </div>
        <div className="mt-5">
          <img width="100px" src={ReadingGirl} alt="girl-reading" />
        </div>
      </div>
    </div>
  );
}

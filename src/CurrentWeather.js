import React from "react";
import ReadingGirl from "./reading-girl.png";
import DateTime from "./DateTime";
import WeatherIcons from "./WeatherIcons";

export default function CurrentWeather(props) {
  return (
    <div className="row second pt-3 pb-3">
      <div className="col">
        <div className="date-time small" id="date_time">
          <DateTime date={props.info.date} />
        </div>

        <div id="description"> {props.info.description} </div>
        <h1>
          <span id="city" /> {props.info.city} <span id="temp-digit" />
          <span className="degrees">
            {" "}
            {Math.round(props.info.temperature)} ºC
          </span>
        </h1>
      </div>

      <div className="col text-center main-image">
        <WeatherIcons code={props.info.icon} />
      </div>

      <div className="col">
        <div className="humidity small">
          Humidity: <span id="humidity" />
          {props.info.humidity}%
        </div>
        <div className="wind small">
          Wind: <span id="wind" /> {Math.round(props.info.wind)}km/h
        </div>
        <div className="mt-5">
          <img width="100px" src={ReadingGirl} alt="girl-reading" />
        </div>
      </div>
    </div>
  );
}

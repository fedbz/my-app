import React from "react";
import WeatherIcons from "./WeatherIcons";
import TemperatureScale from "./TemperatureScale";

export default function ForecastHours(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return temperature;
  }
  return (
    <div className="col">
      {hours()}
      <div className="weather-icon">
        <WeatherIcons size={35} code={props.data.weather[0].icon} />
      </div>
      <div className="small-temperature">
        <TemperatureScale metric={props.metric} temp={temperature()} />
      </div>
    </div>
  );
}

import React, { useState } from "react";
import WeatherIcons from "./WeatherIcons";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row third text-center" id="forecast">
        <div className="col">
          {new Date(forecast.list[0].dt * 1000).getHours()}:00
          <div className="weather-icon">
            <WeatherIcons size={35} code={forecast.list[0].weather[0].icon} />
          </div>
          <div className="small-temperature">
            {Math.round(forecast.list[0].main.temp)}ºC
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3b5a0f5b92d32dc7cafcc0e735ca8c5b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&APPID=${apiKey}`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}

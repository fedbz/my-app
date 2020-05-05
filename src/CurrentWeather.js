import React, { useState } from "react";
import ReadingGirl from "./reading-girl.png";
import axios from "axios";

export default function CurrentWeather(props) {
  const [weatherInfo, setweatherInfo] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);

    setweatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
    });
  }
  if (weatherInfo.ready) {
    return (
      <div className="row second pt-3 pb-3">
        <div className="col">
          <div className="date-time small" id="date_time" />
          <div id="description"> {weatherInfo.description} </div>
          <h1>
            <span id="city" /> {weatherInfo.city} <span id="temp-digit" />
            <span className="degrees">
              {" "}
              {Math.round(weatherInfo.temperature)} ºC
            </span>
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
            {weatherInfo.humidity}%
          </div>
          <div className="wind small">
            Wind: <span id="wind" /> {Math.round(weatherInfo.wind)}km/h
          </div>
          <div className="mt-5">
            <img width="100px" src={ReadingGirl} alt="girl-reading" />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "3b5a0f5b92d32dc7cafcc0e735ca8c5b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&APPID=${apiKey}`;
    axios.get(url).then(handleResponse);

    return "Load..";
  }
}

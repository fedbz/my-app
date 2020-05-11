import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./Search.css";

export default function Search(props) {
  const [weatherInfo, setweatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [metric, setMetric] = useState("C");

  function search() {
    const apiKey = "3b5a0f5b92d32dc7cafcc0e735ca8c5b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#location_input");
    setCity(cityInputElement.value);
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function setFahrenheit(event) {
    event.preventDefault();
    setMetric("F");
  }

  function setCelsius(event) {
    event.preventDefault();
    setMetric("C");
  }

  function handleResponse(response) {
    setweatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherInfo.ready) {
    return (
      <div>
        <div className="row first">
          <div className="col-6">
            <form id="location_form" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  id="location_input"
                  type="text"
                  className="form-control"
                  placeholder="Enter Location"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={handleCityChange}
                />

                <div className="input-group-append" id="magnifying_glass">
                  <button
                    type="submit"
                    className="input-group-text"
                    id="basic-addon2"
                  >
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-4 text-right"></div>
          <div className="col-2 text-right large">
            <span className="scale" id="tempScaleC">
              <a href="/" onClick={setCelsius}>
                ºC
              </a>
            </span>
            <span>|</span>
            <span className="scale" id="tempScaleF">
              <a href="/" onClick={setFahrenheit}>
                ºF
              </a>
            </span>
          </div>
        </div>
        <CurrentWeather metric={metric} info={weatherInfo} />
        <hr />
        <Forecast city={weatherInfo.city} metric={metric} />
      </div>
    );
  } else {
    search();

    return "Load..";
  }
}

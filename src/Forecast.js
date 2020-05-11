import React, { useState } from "react";

import ForecastHours from "./ForecastHours";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row third text-center" id="forecast">
        <ForecastHours data={forecast.list[0]} metric={props.metric} />
        <ForecastHours data={forecast.list[1]} metric={props.metric} />
        <ForecastHours data={forecast.list[2]} metric={props.metric} />
        <ForecastHours data={forecast.list[3]} metric={props.metric} />
        <ForecastHours data={forecast.list[4]} metric={props.metric} />
      </div>
    );
  } else {
    const apiKey = "3b5a0f5b92d32dc7cafcc0e735ca8c5b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&APPID=${apiKey}`;
    axios.get(apiUrl).then(displayForecast);
    return null;
  }
}

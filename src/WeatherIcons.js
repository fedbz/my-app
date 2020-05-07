import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcons(props) {
  return (
    <ReactAnimatedWeather
      icon="CLEAR_DAY"
      color="white"
      size={80}
      animate={false}
    />
  );
}

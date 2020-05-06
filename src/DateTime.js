import React from "react";

export default function DateTime(props) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[props.date.getMonth()];
  let numDay = props.date.getDate();
  if (numDay < 10) {
    numDay = `0${numDay}`;
  }
  let year = props.date.getFullYear();

  return (
    <div>
      {day} {numDay}/{month}/{year}
      <br /> Last updated {hours}:{minutes}
    </div>
  );
}

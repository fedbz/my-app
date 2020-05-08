import React from "react";

export default function TemperatureScale(props) {
  function F() {
    return (props.temp * 9) / 5 + 32;
  }
  if (props.metric === "C") {
    return (
      <div>
        <span className="degrees">
          {" "}
          {Math.round(props.temp)} {props.metric}
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="degrees">
          {" "}
          {Math.round(F())} {props.metric}
        </span>
      </div>
    );
  }
}

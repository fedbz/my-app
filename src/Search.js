import React from "react";

export default function Search() {
  return (
    <div className="row first">
      <div className="col-6">
        <form id="location_form">
          <div className="input-group mb-3">
            <input
              id="location_input"
              type="text"
              className="form-control"
              placeholder="Enter Location"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append" id="magnifying_glass">
              <span className="input-group-text" id="basic-addon2">
                <i className="fas fa-search" />
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="col-4 text-right">
        <button
          type="button"
          className="btn btn-light btn-sm"
          id="button_current_location"
        >
          Current Location
        </button>
      </div>
      <div className="col-2 text-right large">
        <span className="scale" id="tempScaleC">
          <strong>ºC</strong>
        </span>
        <span>|</span>
        <span className="scale" id="tempScaleF">
          ºF
        </span>
      </div>
    </div>
  );
}

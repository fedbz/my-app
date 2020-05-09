import React from "react";
import "./App.css";

import Credits from "./Credits";

import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container rounded p-5 shadow-lg mt-5">
        <Search defaultCity="Rome" />

        <script src="src/index.js" />
      </div>
      <Credits />
    </div>
  );
}

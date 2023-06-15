import React from "react";

import "./App.scss";
import {
  Note,
  Navigation,
  Tictactoc,
  DrumKit,
  StarsCanvas,
} from "./component/index";

export default function App() {
  return (
    <div id="layout">
      <Navigation />
      <Note />
      <DrumKit />
      <Tictactoc />
      <StarsCanvas />
    </div>
  );
}

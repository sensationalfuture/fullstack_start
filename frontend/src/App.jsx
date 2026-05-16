import { useState } from "react";
import Calc_button from "./button";
import Calc_display from "./display";
import "./App.css";

function App() {
  // first display the actual values on the display.
  const [displayVal, setDisplayVal]

  return (
    <div id="calculator">
      <h1 className="title">Calculator</h1>
      <Calc_display value={displayVal} />
      <div>
        <Calc_button variant="clear" onClick={event} />
        <Calc_button variant="backspace" onClick={event} />
        <Calc_button variant="add" onClick={event} />
        <Calc_button variant="subtract" onClick={event} />
        <Calc_button variant="multiply" onClick={event} />
        <Calc_button variant="divide" onClick={event} />
        <Calc_button variant="enter" onClick={event} />
        <Calc_button variant="number" number="1" onClick={event} />
        <Calc_button variant="number" number="2" onClick={event} />
        <Calc_button variant="number" number="3" onClick={event} />
        <Calc_button variant="number" number="4" onClick={event} />
        <Calc_button variant="number" number="5" onClick={event} />
        <Calc_button variant="number" number="6" onClick={event} />
        <Calc_button variant="number" number="7" onClick={event} />
        <Calc_button variant="number" number="8" onClick={event} />
        <Calc_button variant="number" number="9" onClick={event} />
        <Calc_button variant="number" number="0" onClick={event} />
        <Calc_button variant="decimal" onClick={event} />
      </div>
    </div>
  );
}

export default App;

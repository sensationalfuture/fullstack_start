import { useState } from "react";
import Calc_button from "./button";
import Calc_display from "./display";
import "./App.css";

function App() {
  // first display the actual values on the display.
  const [displayVal, setDisplayVal] = useState("0");

  // store the first data value into operation1, then store operation into
  // another var then finally store the second data value into operation2.
  const [operation1, setOperation1] = useState("");
  const [symbol, setOperation] = useState("");
  const [operation2, setOperation2] = useState("");

  const numberClick = (num) => {
    const leadingZero = (num) => operation1 === "" && symbol === "" && num === "0";

    if (symbol === "") {
      if (!leadingZero(num)) {
        setOperation1(operation1 + num);
        setDisplayVal(operation1 + num);
      }
    } else if (symbol !== "") {
      leadingZero(num) && setDisplayVal(operation1 + " " + symbol + " 0");
      setOperation2(operation2 + num);
      setDisplayVal(operation1 + " " + symbol + " " + operation2 + num);
    }
  }

  const decimalClick = () => {
    console.log("decimal click");
    if (operation1.indexOf(".") === -1) {
      setOperation1(operation1 + ".");
      setDisplayVal(operation1 + ".");
    } else if (operation2.indexOf(".") === -1) {
      setOperation2(operation2 + ".");
      setDisplayVal(operation1 + symbol + operation2 + ".");
    }
  };

  const symbolClick = (sym) => {
      if (operation1 !== "") {
        setOperation(sym);
        setDisplayVal(operation1 + " " + sym);
        if (operation2 === "") {
          setOperation(sym);
          setDisplayVal(operation1 + " " + sym);
          }
        }
    }
  const enterClick = () => {
    if (operation1 !== "" && symbol !== "" && operation2 !== "") {
      const result = operations[symbol](parseFloat(operation1), parseFloat(operation2));
      setDisplayVal(result.toString());
      setOperation1(result.toString()); // chain calc to next one
    }
  };
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b !== 0 ? a / b : errorResponse()
  };
  const errorResponse = () => {
    setDisplayVal("Error: Div by 0")
    setOperation1("");
    setOperation("");
    setOperation2("");
  };

  const backspaceClick = () => {
    if (symbol === "") {
      setOperation1(operation1.slice(0, -1));
      setDisplayVal(operation1.slice(0, -1));
    }
  };

  const clearClick = () => {
    setOperation1("");
    setOperation("");
    setOperation2("");
    setDisplayVal("0");
  }


  const negateClick = () => {
    if (symbol === "") {
      if (operation1.charAt(0) === "-") {
        setOperation1(operation1.slice(1));
        setDisplayVal(operation1.slice(1));
      } else {
        setOperation1("-" + operation1);
        setDisplayVal("-" + operation1);
      }
    } else if (symbol !== "") {
      if (operation2.charAt(0) === "-") {
        setOperation2(operation2.slice(1));
        setDisplayVal(operation1 + symbol + operation2.slice(1));
      } else {
        setOperation2("-" + operation2);
        setDisplayVal(operation1 + symbol + " -" + operation2);
      }
    }

  }
  


  return (
    <div id="calculator">
      <h1 className="title">Calculator</h1>
      <Calc_display value={displayVal} />
      <div>
        <Calc_button variant="clear" onClick={clearClick} />
        <Calc_button variant="backspace" onClick={backspaceClick} />
        <Calc_button variant="add" onClick={symbolClick} />
        <Calc_button variant="subtract" onClick={symbolClick} />
        <Calc_button variant="multiply" onClick={symbolClick} />
        <Calc_button variant="divide" onClick={symbolClick} />
        <Calc_button variant="enter" onClick={enterClick} />
        <Calc_button variant="number" number="1" onClick={numberClick} />
        <Calc_button variant="number" number="2" onClick={numberClick} />
        <Calc_button variant="number" number="3" onClick={numberClick} />
        <Calc_button variant="number" number="4" onClick={numberClick} />
        <Calc_button variant="number" number="5" onClick={numberClick} />
        <Calc_button variant="number" number="6" onClick={numberClick} />
        <Calc_button variant="number" number="7" onClick={numberClick} />
        <Calc_button variant="number" number="8" onClick={numberClick} />
        <Calc_button variant="number" number="9" onClick={numberClick} />
        <Calc_button variant="number" number="0" onClick={numberClick} />
        <Calc_button variant="decimal" onClick={decimalClick} />
        <Calc_button variant="negate" onClick={negateClick} />
        <>
          <span>
            <text className="footer">Made by Durjoy Sen</text>
          </span>
        </>
      </div>
    </div>
  );
}

export default App;

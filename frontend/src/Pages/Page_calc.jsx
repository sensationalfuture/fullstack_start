import { useState } from "react";
import Button from "../Components/Button.jsx";
import Calc_display from "../Components/Display.jsx"
import "./Page_calc.css";

export default function Page_calc() {
  // first display the actual values on the display.
  const [displayVal, setDisplayVal] = useState("0");

  // store the first data value into operation1, then store operation into
  // another var then finally store the second data value into operation2.
  const [operation1, setOperation1] = useState("");
  const [symbol, setOperation] = useState("");
  const [operation2, setOperation2] = useState("");

  const numberClick = (num) => {
    const leadingZero = (num) =>
      operation1 === "" && symbol === "" && num === "0";

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
  };

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
  };
  const enterClick = () => {
    if (operation1 !== "" && symbol !== "" && operation2 !== "") {
      const result = operations[symbol](
        parseFloat(operation1),
        parseFloat(operation2),
      );
      setDisplayVal(result.toString());
      setOperation1(result.toString()); // chain calc to next one
      setOperation2("");
      setOperation("");
    }
  };
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => (b !== 0 ? a / b : errorResponse()),
  };
  const errorResponse = () => {
    setDisplayVal("Error: Div by 0");
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
  };

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
  };

  return (
    <>
      <h1 className="font-light text-3xl text-blue-500 font-serif ">Calculator</h1>
      <Calc_display value={displayVal} />
      <div className="flex flex-col items-center justify-center min-h-auto bg-gray-1000 min-w-fit">
        <div className="grid grid-cols-4 gap-2 mt-4">
          {/* Row 1 - clear, backspace, negate, divide */}
          <Button variant="clear" onClick={clearClick} />
          <Button variant="backspace" onClick={backspaceClick} />
          <Button variant="negate" onClick={negateClick} />
          <Button variant="divide" onClick={symbolClick} />

          {/* Row 2 - 7 8 9 multiply */}
          <Button variant="number" number="7" onClick={numberClick} />
          <Button variant="number" number="8" onClick={numberClick} />
          <Button variant="number" number="9" onClick={numberClick} />
          <Button variant="multiply" onClick={symbolClick} />

          {/* Row 3 - 4 5 6 subtract */}
          <Button variant="number" number="4" onClick={numberClick} />
          <Button variant="number" number="5" onClick={numberClick} />
          <Button variant="number" number="6" onClick={numberClick} />
          <Button variant="subtract" onClick={symbolClick} />

          {/* Row 4 - 1 2 3 add */}
          <Button variant="number" number="1" onClick={numberClick} />
          <Button variant="number" number="2" onClick={numberClick} />
          <Button variant="number" number="3" onClick={numberClick} />
          <Button variant="add" onClick={symbolClick} />

          {/* Row 5 - 0 (wide), decimal, enter */}
          <Button
            variant="number"
            number="0"
            onClick={numberClick}
            className="col-span-2"
          />
          <Button variant="decimal" onClick={decimalClick} />
          <Button variant="enter" onClick={enterClick} />
        </div>

        <div className="mt-4 bg-black rounded p-2">
          <p className="text-sky-100 text-xl font-light">Made by Durjoy Sen</p>
        </div>
      </div>
    </>
  );
}


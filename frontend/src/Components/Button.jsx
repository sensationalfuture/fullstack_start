import "../App.jsx";

function Button({ variant = "primary", number = "0", onClick }) {
  const buttonStyle = {
    primary: {
      symbol: "Error",
    },
    add: {
      symbol: "+",
    },
    subtract: {
      symbol: "-",
    },
    multiply: {
      symbol: "*",
    },
    divide: {
      symbol: "/",
    },
    decimal: {
      symbol: ".",
    },
    number: {
      symbol: number,
    },
    enter: {
      symbol: "Enter",
    },
    backspace: {
      symbol: "Backspace",
    },
    clear: {
      symbol: "Clear",
    },
    negate: {
      symbol: "+/-",
    },
  };
  const buttonSymbol = buttonStyle[variant].symbol;


  return (
    <button className="button" onClick={() => onClick(buttonSymbol)}>
      {buttonSymbol}
    </button>
  );
}

export default Button;

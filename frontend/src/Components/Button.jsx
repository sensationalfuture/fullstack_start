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
    <button
      class="hover:bg-sky-500 text-white font-bold py-2 px-20 outline rounded flex justify-center items-center"
      onClick={() => onClick(buttonSymbol)}
    >
      {buttonSymbol}
    </button>
  );
}

export default Button;

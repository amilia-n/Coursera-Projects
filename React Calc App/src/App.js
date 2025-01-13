import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("0");

  // Handle number and operator buttons
  const handleClick = (value) => {
    if (value === "AC") {
      setResult("0"); // Reset the result
    } else if (value === "=") {
      try {
        setResult(eval(result).toString()); // Using eval here to calculate the result
      } catch {
        setResult("Error");
      }
    } else {
      // Concatenate the input values
      setResult(result === "0" ? value : result + value);
    }
  };

  // Arithmetic functions
  function plus() {
    handleClick("+");
  }

  function minus() {
    handleClick("-");
  }

  function times() {
    handleClick("*");
  }

  function divide() {
    handleClick("/");
  }

  return (
    <div className="App">
      <h1>Simplest Working Calculator</h1>
      <div className="calculator">
        <div className="calculator__output">{result}</div>
        <div className="calculator__keys">
          <button className="calculator__key" onClick={() => handleClick("7")}>7</button>
          <button className="calculator__key" onClick={() => handleClick("8")}>8</button>
          <button className="calculator__key" onClick={() => handleClick("9")}>9</button>
          <button className="calculator__key calculator__key--operator" onClick={plus}>+</button>

          <button className="calculator__key" onClick={() => handleClick("4")}>4</button>
          <button className="calculator__key" onClick={() => handleClick("5")}>5</button>
          <button className="calculator__key" onClick={() => handleClick("6")}>6</button>
          <button className="calculator__key calculator__key--operator" onClick={minus}>-</button>

          <button className="calculator__key" onClick={() => handleClick("1")}>1</button>
          <button className="calculator__key" onClick={() => handleClick("2")}>2</button>
          <button className="calculator__key" onClick={() => handleClick("3")}>3</button>
          <button className="calculator__key calculator__key--operator" onClick={times}>×</button>

          <button className="calculator__key calculator__key--ac" onClick={() => handleClick("AC")}>AC</button>
          <button className="calculator__key" onClick={() => handleClick("0")}>0</button>
          <button className="calculator__key" onClick={() => handleClick(".")}>.</button>
          <button className="calculator__key calculator__key--operator" onClick={divide}>÷</button>

          <button className="calculator__key calculator__key--enter" onClick={() => handleClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;

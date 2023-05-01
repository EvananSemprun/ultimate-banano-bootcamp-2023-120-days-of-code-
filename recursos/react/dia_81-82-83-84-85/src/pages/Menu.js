import React, { useState } from "react";
import * as math from "mathjs";

import './calculator.css';
function Calculator() {
  const [result, setResult] = useState("");

  function handleClick(event) {
    setResult(result.concat(event.target.name));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(math.evaluate(result).toString());
    } catch (error) {
      setResult("Error");
    }
  }

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="keypad">
        <button className="btn btn-light" onClick={clear}>Clear</button>
        <button className="btn btn-light" name="+" onClick={handleClick}>+</button>
        <button className="btn btn-light" name="-" onClick={handleClick}>-</button>
        <button className="btn btn-light" name="*" onClick={handleClick}>*</button>
        <button className="btn btn-light" name="/" onClick={handleClick}>/</button>
        <button className="btn btn-light" name="1" onClick={handleClick}>1</button>
        <button className="btn btn-light" name="2" onClick={handleClick}>2</button>
        <button className="btn btn-light" name="3" onClick={handleClick}>3</button>
        <button className="btn btn-light" name="4" onClick={handleClick}>4</button>
        <button className="btn btn-light" name="5" onClick={handleClick}>5</button>
        <button className="btn btn-light" name="6" onClick={handleClick}>6</button>
        <button className="btn btn-light" name="7" onClick={handleClick}>7</button>
        <button className="btn btn-light" name="8" onClick={handleClick}>8</button>
        <button className="btn btn-light" name="9" onClick={handleClick}>9</button>
        <button className="btn btn-light" name="0" onClick={handleClick}>0</button>
        <button className="btn btn-light" name="." onClick={handleClick}>.</button>
        <button className="btn btn-success" onClick={calculate}>=</button>
      </div>
    </div>
  );
}

export default Calculator;

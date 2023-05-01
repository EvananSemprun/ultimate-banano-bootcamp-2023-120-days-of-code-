import React, { useState } from "react";
import * as math from "mathjs";

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
        <div className="row">
          <button className="btn btn-secondary" onClick={clear}>C</button>
          <button className="btn btn-secondary" onClick={handleClick} name="(">(</button>
          <button className="btn btn-secondary" onClick={handleClick} name=")">)</button>
          <button className="btn btn-warning" onClick={handleClick} name="/">÷</button>
        </div>
        <div className="row">
          <button className="btn btn-secondary" onClick={handleClick} name="7">7</button>
          <button className="btn btn-secondary" onClick={handleClick} name="8">8</button>
          <button className="btn btn-secondary" onClick={handleClick} name="9">9</button>
          <button className="btn btn-warning" onClick={handleClick} name="*">×</button>
        </div>
        <div className="row">
          <button className="btn btn-secondary" onClick={handleClick} name="4">4</button>
          <button className="btn btn-secondary" onClick={handleClick} name="5">5</button>
          <button className="btn btn-secondary" onClick={handleClick} name="6">6</button>
          <button className="btn btn-warning" onClick={handleClick} name="-">−</button>
        </div>
        <div className="row">
          <button className="btn btn-secondary" onClick={handleClick} name="1">1</button>
          <button className="btn btn-secondary" onClick={handleClick} name="2">2</button>
          <button className="btn btn-secondary" onClick={handleClick} name="3">3</button>
          <button className="btn btn-warning" onClick={handleClick} name="+">+</button>
        </div>
        <div className="row">
          <button className="btn btn-secondary" onClick={handleClick} name="0">0</button>
          <button className="btn btn-secondary" onClick={handleClick} name=".">.</button>
          <button className="btn btn-success" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

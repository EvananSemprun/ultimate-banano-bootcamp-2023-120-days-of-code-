import React, { useState } from 'react';

import './calcien.css';
function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setExpression((prev) => prev + number);
  };

  const handleOperatorClick = (operator) => {
    setExpression((prev) => prev + operator);
  };

  const handleClearClick = () => {
    setExpression('');
    setResult('');
  };

  const handleDeleteClick = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleEqualClick = () => {
    try {
      setResult(eval(expression));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleLogClick = () => {
    try {
      setResult(Math.log(eval(expression)));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleTrigClick = (func) => {
    try {
      const radians = eval(expression) * (Math.PI / 180);
      setResult(Math[func](radians));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleStatClick = (func) => {
    try {
      const numbers = expression.split(',').map(Number);
      setResult(Math[func](...numbers));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="expression">{expression}</div>
          <div className="result">{result}</div>
        </div>
        <div className="buttons">
          <div className="row">
            <button className="xd" onClick={handleClearClick}>C</button>
            <button className="xd" onClick={handleDeleteClick}>←</button>
            <button className="xd" onClick={() => handleOperatorClick('/')}>÷</button>
            <button className="xd" onClick={() => handleOperatorClick('*')}>×</button>
          </div>
          <div className="row">
            <button className="xd" onClick={() => handleNumberClick('7')}>7</button>
            <button className="xd" onClick={() => handleNumberClick('8')}>8</button>
            <button className="xd" onClick={() => handleNumberClick('9')}>9</button>
            <button className="xd" onClick={() => handleOperatorClick('-')}>-</button>
          </div>
          <div className="row">
            <button className="xd" onClick={() => handleNumberClick('4')}>4</button>
            <button className="xd" onClick={() => handleNumberClick('5')}>5</button>
            <button className="xd" onClick={() => handleNumberClick('6')}>6</button>
            <button className="xd" onClick={() => handleOperatorClick('+')}>+</button>
          </div>
          <div className="row">
            <button className="xd" onClick={() => handleNumberClick('1')}>1</button>
            <button className="xd" onClick={() => handleNumberClick('2')}>2</button>
            <button className="xd" onClick={() => handleNumberClick('3')}>3</button>
            <button className="xd" onClick={() => handleOperatorClick('^')}>^</button>
          </div>
          <div className="row">
            <button className="xd" onClick={() => handleNumberClick('0')}>0</button>
            <button className="xd" onClick={() => handleNumberClick('.')}>.</button>
            <button className="xd" onClick={handleEqualClick}>=</button>
            <button className="xd" onClick={handleLogClick}>log</button>
          </div>
          <div className="row">
            <button className="xd" onClick={() => handleTrigClick('sin')}>sin</button>
            <button className="xd" onClick={() => handleTrigClick('cos')}>cos</button>
            <button className="xd" onClick={() => handleTrigClick('tan')}>tan</button>
            <button className="xd" onClick={() => handleTrigClick('asin')}>asin</button>
          </div>
          <div className="row">
            <button className="xd" onClick={() => handleTrigClick('acos')}>acos</button>
            <button className="xd" onClick={() => handleTrigClick('atan')}>atan</button>
            <button className="xd" onClick={() => handleStatClick('min')}>min</button>
            <button className="xd" onClick={() => handleStatClick('max')}>max</button>
          </div>
          <div className="row">
            <button className="xd" onClick={() => handleStatClick('mean')}>mean</button>
            <button className="xd" onClick={() => handleStatClick('median')}>median</button>
            <button className="xd" onClick={() => handleStatClick('mode')}>mode</button>
            <button className="xd" onClick={() => handleStatClick('sqrt')}>sqrt</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
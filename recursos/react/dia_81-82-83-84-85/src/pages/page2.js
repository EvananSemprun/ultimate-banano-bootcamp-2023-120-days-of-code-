import React, { useState } from 'react';

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
            <button onClick={handleClearClick}>C</button>
            <button onClick={handleDeleteClick}>←</button>
            <button onClick={() => handleOperatorClick('/')}>÷</button>
            <button onClick={() => handleOperatorClick('*')}>×</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
            <button onClick={() => handleOperatorClick('^')}>^</button>
          </div>
          <div className="row">
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={() => handleNumberClick('.')}>.</button>
            <button onClick={handleEqualClick}>=</button>
            <button onClick={handleLogClick}>log</button>
          </div>
          <div className="row">
        <button onClick={() => handleTrigClick('sin')}>sin</button>
        <button onClick={() => handleTrigClick('cos')}>cos</button>
        <button onClick={() => handleTrigClick('tan')}>tan</button>
        <button onClick={() => handleTrigClick('asin')}>asin</button>
      </div>
      <div className="row">
        <button onClick={() => handleTrigClick('acos')}>acos</button>
        <button onClick={() => handleTrigClick('atan')}>atan</button>
        <button onClick={() => handleStatClick('min')}>min</button>
        <button onClick={() => handleStatClick('max')}>max</button>
      </div>
      <div className="row">
        <button onClick={() => handleStatClick('mean')}>mean</button>
        <button onClick={() => handleStatClick('median')}>median</button>
        <button onClick={() => handleStatClick('mode')}>mode</button>
        <button onClick={() => handleStatClick('sqrt')}>sqrt</button>
      </div>
    </div>
  </div>
</div>
);
}

export default App;
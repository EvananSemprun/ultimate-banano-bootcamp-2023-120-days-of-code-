import React, { useState } from 'react';
import './App.css';

function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const handleGeneratePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecialChars) charset += '!@#$%^&*()';

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }

    setGeneratedPassword(password);
  };

  return (
    <div className="container">
      <h1 className="title">Password Generator</h1>
      <div className="options">
        <label>
          Length:
          <input
            type="number"
            className="input"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            min={1}
            max={50}
          />
        </label>
        <div className="checkboxes">
          <label>
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            Include Uppercase
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
            />
            Include Lowercase
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            Include Numbers
          </label>
          <label>
            <input
              type="checkbox"
              checked={includeSpecialChars}
              onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            />
            Include Special Characters
          </label>
        </div>
        <button className="generate-btn" onClick={handleGeneratePassword}>
          Generate Password
        </button>
      </div>
      {generatedPassword && (
        <div className="generated-password">
          <h2>Generated Password:</h2>
          <p>{generatedPassword}</p>
        </div>
      )}
    </div>
  );
}

export default PasswordGenerator;

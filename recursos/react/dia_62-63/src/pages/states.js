import React, { useState } from 'react';

function States() {

  const [count, setCount] = useState(0);
  const [text, setText ] = useState("texto");

  return (
    <div className="App">
      <p>Has clickeado {count} veces</p>
      <button onClick={() => setCount(count + 1)}>
        Contar
      </button>
      <br/>
      <p>
        {text}
      </p>
      <form>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
      </form>
    </div>
  );
}

export default States;

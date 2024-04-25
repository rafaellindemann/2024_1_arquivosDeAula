
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [tela, setTela] = useState('');

  function handleInputChange(event){
    setInputValue(event.target.value);
  }
  function tratarClique(){
    setTela(inputValue)
  }
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />

      <button onClick={tratarClique}>Clica</button>

      <p>O valor do input é: {inputValue}</p>
      <p>O valor lido do input no momento do clique foi: {tela}</p>
    </div>
  );
}

export default App;

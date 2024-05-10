import React, { useState } from 'react';
import './App.css'
function App(){
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openDialog}>Abrir diálogo</button>
      {isOpen && (
        <dialog open onClose={closeDialog} className='modal'>
          <h1>Este é um diálogo</h1>
          <p>Conteúdo do diálogo...</p>
          <button onClick={closeDialog}>Fechar</button>
        </dialog>
      )}
    </div>
  );
};

export default App;

import React from 'react';

function App() {
  const items = ['apple', 'banana', 'cherry'];

  return (
    <ul>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default App;

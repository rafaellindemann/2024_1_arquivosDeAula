import React from 'react';

function App() {
  const items = ['Maçã', 'Banana', 'Abacaxi', 'Bergamota'];

  return (
    <ul>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
}

export default App;


// import React, { useState } from 'react';

// function App() {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <button onClick={() => setIsOn(!isOn)}>
//       {isOn ? 'ON' : 'OFF'}
//     </button>
//   );
// }

// export default App;





// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }

// export default App;




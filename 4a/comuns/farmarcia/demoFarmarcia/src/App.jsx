import './App.css'
// import Header from './components/Header'

// function App() {
  
//   return (
//     <>
//       <Header />
//       {/* <h1 style={{color:'red'}}>Farmárcia</h1> */}
//       <h2>Sob nova direção</h2>
//     </>
//   )
// }

// export default App

// App.js
import Header from './components/Header';
import Body from './components/Body';

const App = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;

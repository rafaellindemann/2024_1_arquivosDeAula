import { useState } from 'react'
import './App.css'
import RenderBooleano from './components/RenderBooleano'
function App() {
  const [cont, setCont] = useState(100)
  const [estado, setEstado] = useState(true)
  // let contador = 0
  // function incrementarContador(){
  //   console.log(contador);
  //   contador++
  // }
  function incrementarUseState(){
    setCont(cont + 1)
  }
  function inverterEstado(){
    setEstado( !estado )
  }
  return (
    <>
      {/* <div>
        <p>Variável contador: {contador}</p>
        <button onClick={incrementarContador}>Incrementar</button>
      </div> */}
      <div>
        <p>useState cont: {cont}</p>
        <button onClick={incrementarUseState}>Incrementar useState</button>
      </div>
      <div>
        <button onClick={inverterEstado}>Toggle Render Booleano</button>
        {estado && <RenderBooleano /> }
      </div>
    </>
  )
}

export default App

import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import Produtos from './components/Produtos'

function App() {
  const [conteudo, setConteudo] = useState(<Home />)
  function mostrarHome(){
    setConteudo(<Home />)
  }
  function mostrarProdutos(){
    setConteudo(<Produtos />)
  }
  return (
    <>
      <header>
        <nav>
          <button onClick={mostrarHome}>Home</button>
          <button onClick={mostrarProdutos}>Produtos</button>
        </nav>
      </header>
      <main>
        { conteudo }
      </main>
    </>
  )
}

export default App

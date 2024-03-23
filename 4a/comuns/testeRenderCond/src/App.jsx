import { useState } from 'react'

import './App.css'
import RenderBooleano from './components/RenderBooleano'
import RenderCondicional from './components/RenderCondicional'
import RenderTernarioTrue from './components/RenderTernarioTrue'
import RenderTernarioFalse from './components/RenderTernarioFalse'
import RenderFuncaoTrue from './components/RenderFuncaoTrue'
import RenderFuncaoFalse from './components/RenderFuncaoFalse'

function App() {
  //////////// render booleano
  const [estado, setEstado] = useState(true)
  function alterarRenderBooleano(){
    setEstado(!estado)
  }

  // render relacional e input
  const [inpIdade, setInpIdade] = useState(0)
  function atualizarIdade(event){
    setInpIdade(event.target.value);
  }
  function processarIdade(){
    if( inpIdade >= 18){
      alert('Maior de idade')
    }else{
      alert('Menor de idade')
    }
  }

  // render por função e return
  function renderPorFuncao(){
    if(inpIdade >= 65){
      return <RenderFuncaoTrue />
    }
      return <RenderFuncaoFalse />
  }


  return (
    <>

      {/* // render condicional booleano */}
      <div>
        <button onClick={alterarRenderBooleano}>RenderBooleano</button>
        { estado && <RenderBooleano /> }
      </div>

      {/* // render com teste relacional */}
      <div>
        <h2>Valor do Input: {inpIdade}</h2>
        <input
          type="number"
          value={inpIdade}  // amarra o valor do input no useState inpIdade
          onChange={atualizarIdade} // toda vez que o usuário alterar o input, chama a função para atualizar o valor de inpIdade
          placeholder="Digite algo..."
        />
        <button onClick={processarIdade}>Processar Idade</button>
        { inpIdade>=18 && <RenderCondicional />}
    </div>

    {/* // render ternário */}
    <div>
      { inpIdade<=12  ? <RenderTernarioTrue /> : <RenderTernarioFalse />}
    </div>

    {/* // render com return de função */}
    <div>
      {renderPorFuncao()}
    </div>

    </>
  )
}

export default App

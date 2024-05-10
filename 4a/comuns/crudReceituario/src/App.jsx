import { useState } from 'react'
import './App.css'
// import Cadastrar from './components/Cadastrar'
import Pesquisar from './components/Pesquisar'
import Editar from './components/Editar'
import Apagar from './components/Apagar'
import Receitas from './components/Receitas'

// let receitas = []
let receitas = [
  {
      nome: "Bolo de Chocolate",
      ingredientes: [
          { nome: "Chocolate em Pó", quantidade: 200, unidade: "g" },
          { nome: "Farinha de Trigo", quantidade: 250, unidade: "g" },
          { nome: "Açúcar", quantidade: 200, unidade: "g" }
      ],
      modoDePreparo: "1. Misture todos os ingredientes secos. 2. Adicione os líquidos. 3. Asse por 40 minutos."
  },
  {
      nome: "Risoto de Funghi",
      ingredientes: [
          { nome: "Arroz Arbóreo", quantidade: 300, unidade: "g" },
          { nome: "Funghi Seco", quantidade: 100, unidade: "g" },
          { nome: "Caldo de Legumes", quantidade: 500, unidade: "ml" }
      ],
      modoDePreparo: "1. Hidrate o funghi. 2. Refogue o arroz com o funghi. 3. Adicione o caldo aos poucos até o arroz ficar al dente."
  },
  {
      nome: "Salada de Frutas",
      ingredientes: [
          { nome: "Banana", quantidade: 2, unidade: "un" },
          { nome: "Maçã", quantidade: 2, unidade: "un" },
          { nome: "Laranja", quantidade: 2, unidade: "un" }
      ],
      modoDePreparo: "1. Corte as frutas em pedaços. 2. Misture tudo em uma tigela. 3. Sirva gelado."
  }
];

function App() {
  const [main, setMain] = useState(<Pesquisar />)

  return (
    <div className='divTela'>
      <div className="painelBotoes">
          <button onClick={() => setMain(<Cadastrar />)}>Cadastrar</button>
          <button onClick={() => setMain(<Pesquisar />)}>Pesquisar</button>
          <button onClick={() => setMain(<Editar />)}>Editar</button>
          <button onClick={() => setMain(<Apagar />)}>Apagar</button>
          <button onClick={() => setMain(<Receitas receitas={receitas}/>)}>Mostrar tudo</button>
      </div>
      {main}
      
    </div>
  )
}


function Cadastrar() {
  const [inputNome, setInputNome] = useState('')
  // const [inputIngredientes, setInputIngredientes] = useState('')
  const [inputPreparo, setInputPreparo] = useState('')

  const [inpIng1Nome, setInpIng1Nome] = useState('')
  const [inpIng1Qtd, setInpIng1Qtd] = useState('')
  const [inpIng1Un, setInpIng1Un] = useState('')
  const [inpIng2Nome, setInpIng2Nome] = useState('')
  const [inpIng2Qtd, setInpIng2Qtd] = useState('')
  const [inpIng2Un, setInpIng2Un] = useState('')
  const [inpIng3Nome, setInpIng3Nome] = useState('')
  const [inpIng3Qtd, setInpIng3Qtd] = useState('')
  const [inpIng3Un, setInpIng3Un] = useState('')

  function tratarInputNome(event){
    setInputNome(event.target.value)
  }

  function tratarInputIngredientes(event){
    setInputIngredientes(event.target.value)
  }
  function tratarInputPreparo(event){
    setInputPreparo(event.target.value)
  }
  function cadastrarReceita(){
    let receita = {
      nome: inputNome,
      ingredientes: [
        { nome:  inpIng1Nome, quantidade: inpIng1Qtd, unidade: inpIng1Un },
        { nome:  inpIng2Nome, quantidade: inpIng2Qtd, unidade: inpIng2Un },
        { nome:  inpIng3Nome, quantidade: inpIng3Qtd, unidade: inpIng3Un },
      ],
      modoDePreparo: inputPreparo
    }
    receitas.push(receita)
    console.log(receitas);
  }

  function tratarNome1(event){
    setInpIng1Nome(event.target.value)
  }
  function tratarNome2(event){
    setInpIng2Nome(event.target.value)
  }
  function tratarNome3(event){
    setInpIng3Nome(event.target.value)
  }
  function tratarQtd1(event){
    setInpIng1Qtd(event.target.value)
  }
  function tratarQtd2(event){
    setInpIng2Qtd(event.target.value)
  }
  function tratarQtd3(event){
    setInpIng3Qtd(event.target.value)
  }
  function tratarUn1(event){
    setInpIng1Un(event.target.value)
  }
  function tratarUn2(event){
    setInpIng2Un(event.target.value)
  }
  function tratarUn3(event){
    setInpIng3Un(event.target.value)
  }

  return (
    <div className='divFormCadastro'>
        <h1>Cadastrar aqui</h1>
        Nome<input type="text" value={inputNome} onChange={tratarInputNome}/>
        <div className="divIngredientes">
          Ingredientes
          <div className="divIngrediente">
            Nome:<input type="text" value={inpIng1Nome} onChange={tratarNome1}/>
            Quantidade:<input type="number" value={inpIng1Qtd} onChange={tratarQtd1}/>
            Un:<input type="text" value={inpIng1Un} onChange={tratarUn1}/>
          </div>
          <div className="divIngrediente">
            2Nome:<input type="text" value={inpIng2Nome} onChange={tratarNome2}/>
            Quantidade:<input type="number" value={inpIng2Qtd} onChange={tratarQtd2}/>
            Un:<input type="text" value={inpIng2Un} onChange={tratarUn2}/>
          </div>
          <div className="divIngrediente">
            3Nome:<input type="text" value={inpIng3Nome} onChange={tratarNome3}/>
            Quantidade:<input type="number" value={inpIng3Qtd} onChange={tratarQtd3}/>
            Un:<input type="text" value={inpIng3Un} onChange={tratarUn3}/>
          </div>
        </div>
        {/* Ingredientes<input type="text" value={inputIngredientes} onChange={tratarInputIngredientes}/> */}
        Preparo<input type="text" value={inputPreparo} onChange={tratarInputPreparo}/>
        <button onClick={cadastrarReceita}>Cadastrar</button>
        {/* {console.log(receitas)} */}
        {/* {inputNome} */}
    </div>
  )
}

// export default Cadastrar

export default App

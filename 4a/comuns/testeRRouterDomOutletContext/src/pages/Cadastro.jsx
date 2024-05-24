
import {UsuariosContext} from "../context/GlobalContext"
import {useContext} from "react"

function Cadastro() {
  const {usuarios, setUsuarios} = useContext(UsuariosContext)

function cadastrar(){
  let tempUsuarios = usuarios
  let usuario = {
    nome: prompt('Digite o nome:'),
    email: prompt('Digite o e-mail:')
  }
  tempUsuarios.push(usuario)
  setUsuarios(tempUsuarios)
}
  return (
    <div>
      <h1>PÁGINA DE CADASTRO</h1>
      <button onClick={cadastrar}>Cadastrar novo usuário</button>
    </div>
  )
}

export default Cadastro

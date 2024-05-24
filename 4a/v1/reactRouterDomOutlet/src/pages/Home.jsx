
import { useContext } from "react"
import { UsuariosContext } from "../context/GlobalContext"

function Home() {
  const {usuarios, senhorSupremoDoUniverso, versaoAtual} = useContext(UsuariosContext)

  return (
    <div>
      <h1>Bem vindo à minha home sweet home.</h1>
      {usuarios[0].nome} <br />
      <p>Senhor Supremo do Universo: {senhorSupremoDoUniverso}</p>
      <p>Versao atual: {versaoAtual}</p>

    </div>
  )
}

export default Home

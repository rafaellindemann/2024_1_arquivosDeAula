import { useContext } from "react"
import Navbar from "../components/Navbar"
import { UsuariosContext } from "../contexts/GlobalContext"

function Home() {
    const {autor} = useContext(UsuariosContext);

  return (
    <div>
      <h1>Página home sweet home</h1>
      <p>Nome do autor: {autor}</p>
    </div>
  )
}

export default Home

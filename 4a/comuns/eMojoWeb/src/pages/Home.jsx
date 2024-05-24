import { useContext } from "react";
import './Home.css';
import { GlobalContext } from "../contexts/GlobalContext";
function Home() {

  const {teste} = useContext(GlobalContext)
 
  return (
    <div className="containerHome">
      <h1>Página Home</h1>
      <p>Aqui temos uma demonstração simples da utilização do React Router DOM controlando a navegação entre as páginas.</p>
      {teste}
    </div>
  )
}

export default Home

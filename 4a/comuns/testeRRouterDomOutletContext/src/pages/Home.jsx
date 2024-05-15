import { useContext } from "react";
import './Home.css';
import { UsuariosContext } from "../context/GlobalContext";
function Home() {

  const {usuarios, senhorSupremoDoUniverso} = useContext(UsuariosContext)
 
  return (
    <div className="containerHome">
      <h1>Página Home</h1>
      <p>Aqui temos uma demonstração simples da utilização do React Router DOM controlando a navegação entre as páginas.</p>
      {/* {usuarios[0].nome} <br /> */}
      {usuarios.map( (usuario,index) => (
          <p key={index}>
            {usuario.nome} - {usuario.email}
          </p>
      ) )}
      {<p>{senhorSupremoDoUniverso}</p>}
    </div>
  )
}

export default Home

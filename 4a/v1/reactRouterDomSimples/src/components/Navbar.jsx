
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cadastro">Cadastrar</Link>
      <Link to="/denuncias">Denunciar usuário</Link>
    </nav>
  )
}

export default Navbar


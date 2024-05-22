import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/cadastro" >Cadastro</Link>
      <Link to="/estoque" >Estoque</Link>
      <Link to="/rapidao" >Rapidao</Link>

    </nav>
  )
}

export default Navbar

import { Link } from "react-router-dom"
import './index.css';
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Link to="/lista">Lista</Link>
    </nav>
  )
}

export default Navbar

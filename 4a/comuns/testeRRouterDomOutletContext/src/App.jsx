import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { UsuariosContextProvider } from './context/GlobalContext'

function App() {

  return (
    <UsuariosContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </UsuariosContextProvider>
  )
}

export default App

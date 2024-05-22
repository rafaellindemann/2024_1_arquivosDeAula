import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { UsuariosContextProvider } from './contexts/GlobalContext'

function App() {


  return (
    <>
      <UsuariosContextProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </UsuariosContextProvider>

    </>
  )
}

export default App

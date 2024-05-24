
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { UsuariosContextProvider } from './context/GlobalContext'
function App() {
  return (
    <>
      
      <UsuariosContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </UsuariosContextProvider>

    </>
  )
}

export default App
